/**
 * Claude API Service for AI-powered agent functionality
 */

const CLAUDE_API_KEY = process.env.REACT_APP_CLAUDE_API_KEY;
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';

class ClaudeService {
  constructor() {
    this.apiKey = CLAUDE_API_KEY;
    this.baseUrl = CLAUDE_API_URL;
    
    if (!this.apiKey) {
      console.warn('Claude API key not found. AI features will be disabled.');
    }
  }

  async callClaude({ prompt, model = 'claude-3-sonnet-20240229', maxTokens = 1000 }) {
    if (!this.apiKey) {
      throw new Error('Claude API key not configured');
    }

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          messages: [{
            role: 'user',
            content: prompt
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Claude API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      return {
        content: data.content[0].text,
        usage: data.usage,
        model: data.model
      };
    } catch (error) {
      console.error('Claude API call failed:', error);
      throw error;
    }
  }

  async analyzeAssessmentProgress(assessmentData) {
    const prompt = `You are an expert software maturity assessment consultant. Analyze this assessment progress and provide intelligent guidance.

Current Assessment Data:
${JSON.stringify(assessmentData, null, 2)}

Please provide a comprehensive analysis with the following structure:

1. PROGRESS_SUMMARY:
   - Overall completion percentage
   - Strongest areas (categories with good coverage)
   - Weakest areas (categories needing attention)
   - Critical gaps that need immediate focus

2. NEXT_STEPS:
   - Top 3 recommended assessment items to complete next (prioritized by impact)
   - Estimated time to complete each item
   - Why each item is important
   - Potential blockers or dependencies

3. CONTEXTUAL_QUESTIONS:
   - 2-3 intelligent follow-up questions based on current responses
   - Questions should help clarify implementation details
   - Focus on areas where more context would improve recommendations

4. RISK_INSIGHTS:
   - Potential risks based on current gaps
   - Areas where incomplete assessments might hide problems
   - Recommendations for risk mitigation

Format your response as valid JSON with this structure:
{
  "progressSummary": {
    "completionPercentage": number,
    "strongestAreas": [string],
    "weakestAreas": [string],
    "criticalGaps": [string]
  },
  "nextSteps": [
    {
      "category": string,
      "item": string,
      "priority": "high" | "medium" | "low",
      "estimatedTime": string,
      "importance": string,
      "blockers": [string]
    }
  ],
  "contextualQuestions": [
    {
      "question": string,
      "category": string,
      "purpose": string
    }
  ],
  "riskInsights": {
    "identifiedRisks": [string],
    "hiddenProblems": [string],
    "mitigationRecommendations": [string]
  }
}`;

    const response = await this.callClaude({ 
      prompt, 
      maxTokens: 1500 
    });

    try {
      return JSON.parse(response.content);
    } catch (parseError) {
      // Fallback to text response if JSON parsing fails
      console.warn('Failed to parse Claude response as JSON, returning raw text');
      return {
        rawResponse: response.content,
        error: 'Failed to parse structured response'
      };
    }
  }

  async generateImprovementSuggestions(criteriaCategory, currentAnswers) {
    const prompt = `As a software maturity expert, provide specific improvement suggestions for this assessment category.

Category: ${criteriaCategory}
Current Responses: ${JSON.stringify(currentAnswers, null, 2)}

Provide actionable improvement suggestions for each incomplete or "false" item. For each suggestion, include:
1. What specifically needs to be implemented
2. Why it's important for software maturity
3. Estimated effort level (Low/Medium/High)  
4. Tools or resources that can help
5. Success criteria to measure completion

Format as JSON:
{
  "suggestions": [
    {
      "item": string,
      "recommendation": string,
      "importance": string,
      "effort": "Low" | "Medium" | "High",
      "tools": [string],
      "successCriteria": [string]
    }
  ]
}`;

    const response = await this.callClaude({ 
      prompt, 
      maxTokens: 1200 
    });

    try {
      return JSON.parse(response.content);
    } catch (parseError) {
      return {
        rawResponse: response.content,
        error: 'Failed to parse structured response'
      };
    }
  }
}

// Export singleton instance
export const claudeService = new ClaudeService();
export default claudeService;
