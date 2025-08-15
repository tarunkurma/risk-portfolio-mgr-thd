/**
 * Assessment Completion Agent - Guides users through complex assessments
 * with intelligent assistance and contextual recommendations
 */
import { AgentBase } from './AgentBase';
import { claudeService } from '../services/claudeService';
import toast from 'react-hot-toast';

export class AssessmentCompletionAgent extends AgentBase {
  constructor(config = {}) {
    super('AssessmentCompletion', {
      timeout: 45000, // Longer timeout for complex analysis
      ...config
    });
  }

  async _performExecution(context, options = {}) {
    const { assessmentData, phase = 'develop', action = 'analyze' } = context;

    if (!assessmentData) {
      throw new Error('Assessment data is required for analysis');
    }

    switch (action) {
      case 'analyze':
        return await this._analyzeProgress(assessmentData, phase);
      case 'suggest':
        return await this._generateSuggestions(assessmentData, phase, options);
      case 'validate':
        return await this._validateCompleteness(assessmentData, phase);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }

  async _analyzeProgress(assessmentData, phase) {
    try {
      const analysis = await claudeService.analyzeAssessmentProgress(assessmentData);
      
      // Enhance the analysis with calculated metrics
      const enhancedAnalysis = {
        ...analysis,
        calculatedMetrics: this._calculateMetrics(assessmentData),
        recommendations: this._prioritizeRecommendations(analysis.nextSteps || []),
        timestamp: new Date().toISOString(),
        phase
      };

      toast.success('Assessment analysis completed!');
      return enhancedAnalysis;
    } catch (error) {
      console.error('Failed to analyze assessment progress:', error);
      throw new Error(`Analysis failed: ${error.message}`);
    }
  }

  async _generateSuggestions(assessmentData, phase, options) {
    const { category, currentAnswers } = options;
    
    if (!category || !currentAnswers) {
      throw new Error('Category and current answers are required for suggestions');
    }

    try {
      const suggestions = await claudeService.generateImprovementSuggestions(category, currentAnswers);
      
      const enhancedSuggestions = {
        ...suggestions,
        category,
        phase,
        generatedAt: new Date().toISOString(),
        implementationPlan: this._createImplementationPlan(suggestions.suggestions || [])
      };

      toast.success(`Generated ${suggestions.suggestions?.length || 0} improvement suggestions`);
      return enhancedSuggestions;
    } catch (error) {
      console.error('Failed to generate suggestions:', error);
      throw new Error(`Suggestion generation failed: ${error.message}`);
    }
  }

  async _validateCompleteness(assessmentData, phase) {
    const validation = {
      phase,
      validatedAt: new Date().toISOString(),
      completionStatus: this._calculateCompletionStatus(assessmentData),
      missingRequired: this._findMissingRequired(assessmentData),
      qualityScore: this._calculateQualityScore(assessmentData),
      recommendations: []
    };

    // Add recommendations based on validation results
    if (validation.completionStatus.percentage < 70) {
      validation.recommendations.push({
        type: 'completion',
        priority: 'high',
        message: 'Assessment is below 70% complete. Focus on completing critical sections first.'
      });
    }

    if (validation.missingRequired.length > 0) {
      validation.recommendations.push({
        type: 'required',
        priority: 'critical',
        message: `Missing ${validation.missingRequired.length} required assessment items.`,
        items: validation.missingRequired
      });
    }

    return validation;
  }

  _calculateMetrics(assessmentData) {
    const criteria = assessmentData.criteria || {};
    const totalItems = this._countTotalItems(criteria);
    const completedItems = this._countCompletedItems(criteria);
    const completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

    const categoryBreakdown = Object.entries(criteria).map(([category, items]) => {
      const categoryTotal = Object.keys(items).length;
      const categoryCompleted = Object.values(items).filter(Boolean).length;
      const categoryPercentage = categoryTotal > 0 ? (categoryCompleted / categoryTotal) * 100 : 0;

      return {
        category,
        total: categoryTotal,
        completed: categoryCompleted,
        percentage: Math.round(categoryPercentage),
        status: categoryPercentage >= 80 ? 'complete' : 
                categoryPercentage >= 50 ? 'in-progress' : 'needs-attention'
      };
    });

    return {
      overall: {
        total: totalItems,
        completed: completedItems,
        percentage: Math.round(completionPercentage)
      },
      byCategory: categoryBreakdown,
      strengths: categoryBreakdown.filter(c => c.percentage >= 80),
      weaknesses: categoryBreakdown.filter(c => c.percentage < 50)
    };
  }

  _prioritizeRecommendations(recommendations) {
    // Sort recommendations by priority and potential impact
    return recommendations.sort((a, b) => {
      const priorityWeight = { high: 3, medium: 2, low: 1 };
      const aWeight = priorityWeight[a.priority] || 0;
      const bWeight = priorityWeight[b.priority] || 0;
      return bWeight - aWeight;
    });
  }

  _createImplementationPlan(suggestions) {
    const quickWins = suggestions.filter(s => s.effort === 'Low');
    const mediumTerm = suggestions.filter(s => s.effort === 'Medium');
    const longTerm = suggestions.filter(s => s.effort === 'High');

    return {
      immediate: quickWins.slice(0, 3), // Top 3 quick wins
      shortTerm: mediumTerm.slice(0, 2), // Top 2 medium effort items
      longTerm: longTerm.slice(0, 1), // Top 1 high effort item
      timeline: {
        week1: quickWins.slice(0, 1),
        week2_4: quickWins.slice(1, 3).concat(mediumTerm.slice(0, 1)),
        month2_3: mediumTerm.slice(1, 2).concat(longTerm.slice(0, 1))
      }
    };
  }

  _calculateCompletionStatus(assessmentData) {
    const criteria = assessmentData.criteria || {};
    const scores = assessmentData.scores || {};
    
    const criteriaCompletion = this._calculateMetrics(assessmentData).overall;
    
    // Factor in scoring completion
    const scoresCompletion = {
      total: Object.keys(scores).length,
      completed: Object.values(scores).filter(score => score && score !== '').length
    };
    scoresCompletion.percentage = scoresCompletion.total > 0 ? 
      (scoresCompletion.completed / scoresCompletion.total) * 100 : 0;

    // Combined completion status
    const weightedCompletion = (criteriaCompletion.percentage * 0.7) + (scoresCompletion.percentage * 0.3);

    return {
      overall: Math.round(weightedCompletion),
      criteria: criteriaCompletion,
      scores: scoresCompletion,
      status: weightedCompletion >= 90 ? 'complete' : 
              weightedCompletion >= 70 ? 'mostly-complete' :
              weightedCompletion >= 40 ? 'in-progress' : 'just-started'
    };
  }

  _findMissingRequired(assessmentData) {
    // Define critical assessment items that should always be completed
    const requiredItems = [
      { category: 'securityStandards', item: 'inputValidation', reason: 'Critical for application security' },
      { category: 'securityStandards', item: 'authenticationProtocols', reason: 'Essential for user data protection' },
      { category: 'infrastructure', item: 'containerization', reason: 'Important for deployment consistency' },
      { category: 'testCoverage', item: 'unitTestingFrameworks', reason: 'Fundamental for code quality' }
    ];

    const missing = [];
    const criteria = assessmentData.criteria || {};

    requiredItems.forEach(required => {
      const categoryData = criteria[required.category];
      if (!categoryData || !categoryData[required.item]) {
        missing.push({
          ...required,
          priority: 'required'
        });
      }
    });

    return missing;
  }

  _calculateQualityScore(assessmentData) {
    const metrics = this._calculateMetrics(assessmentData);
    const completionScore = metrics.overall.percentage;
    
    // Quality factors
    const consistencyScore = this._calculateConsistencyScore(assessmentData);
    const coverageScore = this._calculateCoverageScore(assessmentData);
    
    // Weighted quality score
    const qualityScore = (completionScore * 0.4) + (consistencyScore * 0.3) + (coverageScore * 0.3);
    
    return {
      overall: Math.round(qualityScore),
      factors: {
        completion: Math.round(completionScore),
        consistency: Math.round(consistencyScore),
        coverage: Math.round(coverageScore)
      },
      rating: qualityScore >= 85 ? 'excellent' :
              qualityScore >= 70 ? 'good' :
              qualityScore >= 50 ? 'fair' : 'needs-improvement'
    };
  }

  _calculateConsistencyScore(assessmentData) {
    // Check for consistency across related assessment areas
    // This is a simplified version - could be enhanced with more domain knowledge
    const criteria = assessmentData.criteria || {};
    let consistencyScore = 100;

    // Example: If security standards are high, infrastructure should also have security measures
    const securityItems = Object.values(criteria.securityStandards || {});
    const infraItems = Object.values(criteria.infrastructure || {});
    
    const securityCompleteness = securityItems.filter(Boolean).length / securityItems.length;
    const infraCompleteness = infraItems.filter(Boolean).length / infraItems.length;
    
    // Penalize large gaps between related areas
    const gap = Math.abs(securityCompleteness - infraCompleteness);
    if (gap > 0.3) {
      consistencyScore -= (gap * 100); // Reduce score for inconsistency
    }

    return Math.max(0, consistencyScore);
  }

  _calculateCoverageScore(assessmentData) {
    const criteria = assessmentData.criteria || {};
    const categories = Object.keys(criteria);
    
    // Penalize if major categories are completely empty
    let coverageScore = 100;
    categories.forEach(category => {
      const items = Object.values(criteria[category] || {});
      const completion = items.filter(Boolean).length / items.length;
      
      if (completion === 0) {
        coverageScore -= 20; // Penalty for completely empty category
      }
    });

    return Math.max(0, coverageScore);
  }

  _countTotalItems(criteria) {
    return Object.values(criteria).reduce((total, category) => 
      total + Object.keys(category).length, 0
    );
  }

  _countCompletedItems(criteria) {
    return Object.values(criteria).reduce((total, category) => 
      total + Object.values(category).filter(Boolean).length, 0
    );
  }

  // Public helper methods for component integration
  async quickAnalysis(assessmentData, phase = 'develop') {
    return await this.execute({ assessmentData, phase, action: 'analyze' });
  }

  async getSuggestions(assessmentData, category, currentAnswers, phase = 'develop') {
    return await this.execute({ 
      assessmentData, 
      phase, 
      action: 'suggest' 
    }, { category, currentAnswers });
  }

  async validateAssessment(assessmentData, phase = 'develop') {
    return await this.execute({ assessmentData, phase, action: 'validate' });
  }
}

export default AssessmentCompletionAgent;
