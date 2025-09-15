/**
 * Mock implementation of Claude API Service for testing
 */

export const claudeService = {
  callClaude: jest.fn().mockResolvedValue({
    content: 'Mock response from Claude',
    usage: { total_tokens: 100 },
    model: 'claude-3-sonnet-test'
  }),

  analyzeAssessmentProgress: jest.fn().mockResolvedValue({
    progressSummary: {
      completionPercentage: 75,
      strongestAreas: ['Security', 'Testing'],
      weakestAreas: ['Documentation'],
      criticalGaps: ['No CI/CD pipeline']
    },
    nextSteps: [
      {
        category: 'infrastructure',
        item: 'Setup CI/CD',
        priority: 'high',
        estimatedTime: '2 hours',
        importance: 'Critical for deployment',
        blockers: []
      }
    ],
    contextualQuestions: [
      {
        question: 'What is your deployment frequency?',
        category: 'deploy',
        purpose: 'Understanding release cycles'
      }
    ],
    riskInsights: {
      identifiedRisks: ['Manual deployment prone to errors'],
      hiddenProblems: ['Lack of monitoring'],
      mitigationRecommendations: ['Implement automated testing']
    }
  }),

  generateImprovementSuggestions: jest.fn().mockResolvedValue({
    suggestions: [
      {
        item: 'unitTesting',
        recommendation: 'Implement unit tests',
        importance: 'High',
        effort: 'Medium',
        tools: ['Jest', 'React Testing Library'],
        successCriteria: ['80% code coverage']
      }
    ]
  })
};

export default claudeService;