/**
 * Base Agent class for all AI-powered agents
 */
import { claudeService } from '../services/claudeService';
import toast from 'react-hot-toast';

export class AgentBase {
  constructor(name, config = {}) {
    this.name = name;
    this.config = {
      retryAttempts: 3,
      timeout: 30000,
      enableLogging: true,
      ...config
    };
    this.isActive = false;
    this.lastExecution = null;
    this.executionHistory = [];
  }

  async execute(context, options = {}) {
    const executionId = `${this.name}-${Date.now()}`;
    this.isActive = true;

    try {
      if (this.config.enableLogging) {
        console.log(`🤖 Agent ${this.name} starting execution`, { context, options });
      }

      const startTime = Date.now();
      const result = await this._executeWithRetry(context, options);
      const duration = Date.now() - startTime;

      const executionResult = {
        id: executionId,
        timestamp: new Date().toISOString(),
        duration,
        success: true,
        result,
        context
      };

      this.lastExecution = executionResult;
      this.executionHistory.push(executionResult);

      if (this.config.enableLogging) {
        console.log(`✅ Agent ${this.name} completed successfully`, { duration, result });
      }

      return result;
    } catch (error) {
      const executionResult = {
        id: executionId,
        timestamp: new Date().toISOString(),
        duration: Date.now() - Date.now(),
        success: false,
        error: error.message,
        context
      };

      this.lastExecution = executionResult;
      this.executionHistory.push(executionResult);

      if (this.config.enableLogging) {
        console.error(`❌ Agent ${this.name} failed:`, error);
      }

      toast.error(`Agent ${this.name} encountered an error: ${error.message}`);
      throw error;
    } finally {
      this.isActive = false;
    }
  }

  async _executeWithRetry(context, options) {
    let lastError;

    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      try {
        return await Promise.race([
          this._performExecution(context, options),
          this._createTimeoutPromise()
        ]);
      } catch (error) {
        lastError = error;
        
        if (attempt < this.config.retryAttempts) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
          if (this.config.enableLogging) {
            console.warn(`🔄 Agent ${this.name} retry ${attempt}/${this.config.retryAttempts} after ${delay}ms`);
          }
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError;
  }

  _createTimeoutPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Agent ${this.name} timed out after ${this.config.timeout}ms`));
      }, this.config.timeout);
    });
  }

  // Abstract method to be implemented by subclasses
  async _performExecution(context, options) {
    throw new Error(`Agent ${this.name} must implement _performExecution method`);
  }

  // Utility method for calling Claude
  async callClaude(prompt, options = {}) {
    return await claudeService.callClaude({ 
      prompt, 
      ...options 
    });
  }

  // Get execution statistics
  getStats() {
    const successful = this.executionHistory.filter(e => e.success).length;
    const failed = this.executionHistory.filter(e => !e.success).length;
    const avgDuration = this.executionHistory.reduce((sum, e) => sum + (e.duration || 0), 0) / this.executionHistory.length;

    return {
      totalExecutions: this.executionHistory.length,
      successful,
      failed,
      successRate: this.executionHistory.length > 0 ? (successful / this.executionHistory.length) * 100 : 0,
      averageDuration: Math.round(avgDuration),
      isActive: this.isActive,
      lastExecution: this.lastExecution
    };
  }

  // Clear execution history
  clearHistory() {
    this.executionHistory = [];
    this.lastExecution = null;
  }
}

export default AgentBase;
