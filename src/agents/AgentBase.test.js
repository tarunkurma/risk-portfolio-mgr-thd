import { AgentBase } from './AgentBase';
import { claudeService } from '../services/claudeService';
import toast from 'react-hot-toast';

// Mock the services
jest.mock('../services/claudeService');
jest.mock('react-hot-toast');

describe('AgentBase', () => {
  let agent;
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    agent = new AgentBase('TestAgent');
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('constructor', () => {
    it('should initialize with default config', () => {
      expect(agent.name).toBe('TestAgent');
      expect(agent.config.retryAttempts).toBe(3);
      expect(agent.config.timeout).toBe(30000);
      expect(agent.config.enableLogging).toBe(true);
      expect(agent.isActive).toBe(false);
      expect(agent.lastExecution).toBeNull();
      expect(agent.executionHistory).toEqual([]);
    });

    it('should accept custom config', () => {
      const customAgent = new AgentBase('CustomAgent', {
        retryAttempts: 5,
        timeout: 60000,
        enableLogging: false
      });
      
      expect(customAgent.config.retryAttempts).toBe(5);
      expect(customAgent.config.timeout).toBe(60000);
      expect(customAgent.config.enableLogging).toBe(false);
    });
  });

  describe('execute', () => {
    it('should execute successfully and update state', async () => {
      const mockResult = { data: 'test result' };
      agent._performExecution = jest.fn().mockResolvedValue(mockResult);
      
      const context = { test: 'context' };
      const result = await agent.execute(context);
      
      expect(result).toEqual(mockResult);
      expect(agent.lastExecution).toMatchObject({
        success: true,
        result: mockResult,
        context
      });
      expect(agent.executionHistory).toHaveLength(1);
      expect(agent.isActive).toBe(false);
    });

    it('should log execution when logging is enabled', async () => {
      agent._performExecution = jest.fn().mockResolvedValue({ data: 'test' });
      
      await agent.execute({ test: 'context' });
      
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('🤖 Agent TestAgent starting execution'),
        expect.any(Object)
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('✅ Agent TestAgent completed successfully'),
        expect.any(Object)
      );
    });

    it('should not log when logging is disabled', async () => {
      agent.config.enableLogging = false;
      agent._performExecution = jest.fn().mockResolvedValue({ data: 'test' });
      
      await agent.execute({ test: 'context' });
      
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });

    it('should handle execution errors', async () => {
      const error = new Error('Execution failed');
      agent._performExecution = jest.fn().mockRejectedValue(error);
      
      await expect(agent.execute({ test: 'context' })).rejects.toThrow('Execution failed');
      
      expect(agent.lastExecution).toMatchObject({
        success: false,
        error: error.message
      });
      expect(agent.isActive).toBe(false);
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringContaining('Agent TestAgent failed')
      );
    });

    it('should handle timeout', async () => {
      agent.config.timeout = 100;
      agent._performExecution = jest.fn().mockImplementation(
        () => new Promise(resolve => setTimeout(resolve, 200))
      );
      
      await expect(agent.execute({ test: 'context' })).rejects.toThrow('timeout');
      
      expect(agent.isActive).toBe(false);
      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe('_executeWithRetry', () => {
    it('should retry on failure', async () => {
      let attempts = 0;
      agent._performExecution = jest.fn().mockImplementation(() => {
        attempts++;
        if (attempts < 3) {
          return Promise.reject(new Error('Temporary failure'));
        }
        return Promise.resolve({ success: true });
      });
      
      const result = await agent._executeWithRetry({ test: 'context' });
      
      expect(result).toEqual({ success: true });
      expect(agent._performExecution).toHaveBeenCalledTimes(3);
    });

    it('should throw after max retry attempts', async () => {
      agent.config.retryAttempts = 2;
      agent._performExecution = jest.fn().mockRejectedValue(new Error('Persistent failure'));
      
      await expect(agent._executeWithRetry({ test: 'context' }))
        .rejects.toThrow('Persistent failure');
      
      expect(agent._performExecution).toHaveBeenCalledTimes(2);
    });

    it('should not retry on non-retryable errors', async () => {
      const error = new Error('Invalid API key');
      error.retryable = false;
      agent._performExecution = jest.fn().mockRejectedValue(error);
      
      await expect(agent._executeWithRetry({ test: 'context' }))
        .rejects.toThrow('Invalid API key');
      
      expect(agent._performExecution).toHaveBeenCalledTimes(1);
    });
  });

  describe('_performExecution', () => {
    it('should throw not implemented error for base class', async () => {
      await expect(agent._performExecution({ test: 'context' }))
        .rejects.toThrow('_performExecution must be implemented by subclass');
    });
  });

  describe('getStatus', () => {
    it('should return current agent status', () => {
      const status = agent.getStatus();
      
      expect(status).toMatchObject({
        name: 'TestAgent',
        isActive: false,
        lastExecution: null,
        totalExecutions: 0
      });
    });

    it('should include execution history in status', async () => {
      agent._performExecution = jest.fn().mockResolvedValue({ data: 'test' });
      await agent.execute({ test: 'context' });
      
      const status = agent.getStatus();
      
      expect(status.totalExecutions).toBe(1);
      expect(status.lastExecution).toBeTruthy();
      expect(status.successRate).toBe(100);
    });
  });

  describe('clearHistory', () => {
    it('should clear execution history', async () => {
      agent._performExecution = jest.fn().mockResolvedValue({ data: 'test' });
      await agent.execute({ test: 'context' });
      
      expect(agent.executionHistory).toHaveLength(1);
      
      agent.clearHistory();
      
      expect(agent.executionHistory).toEqual([]);
      expect(agent.lastExecution).toBeNull();
    });
  });

  describe('timeout handling', () => {
    it('should timeout long-running executions', async () => {
      jest.useFakeTimers();
      agent.config.timeout = 1000;
      
      agent._performExecution = jest.fn().mockImplementation(
        () => new Promise(() => {}) // Never resolves
      );
      
      const executePromise = agent.execute({ test: 'context' });
      
      // Fast-forward time
      jest.advanceTimersByTime(1100);
      
      await expect(executePromise).rejects.toThrow('timeout');
      
      jest.useRealTimers();
    });
  });

  describe('error categorization', () => {
    it('should categorize network errors as retryable', () => {
      const networkError = new Error('Network error');
      networkError.code = 'ECONNREFUSED';
      
      expect(agent._isRetryableError(networkError)).toBe(true);
    });

    it('should categorize auth errors as non-retryable', () => {
      const authError = new Error('Authentication failed');
      authError.code = 'AUTH_FAILED';
      
      expect(agent._isRetryableError(authError)).toBe(false);
    });
  });
});