# 🤖 AI Agent Setup Guide

## Quick Start

Your Assessment Completion Agent is ready to use! Follow these steps to get AI-powered assessment assistance:

### 1. Get Your Claude API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key (starts with `sk-ant-api03-...`)
5. Copy the key immediately (it's only shown once!)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# AI Agent Configuration
REACT_APP_CLAUDE_API_KEY=YOUR_API_KEY_HERE

# Optional configurations
REACT_APP_AI_FEATURES_ENABLED=true
REACT_APP_AGENT_TIMEOUT=30000
REACT_APP_AGENT_RETRY_ATTEMPTS=3
```

**Important:** Never commit your API key to version control! Add `.env.local` to your `.gitignore` file.

### 3. Test the Agent

1. Start your development server: `npm start`
2. Navigate to `/develop` page
3. Look for the floating robot 🤖 icon in the bottom-right corner
4. Click the icon to open the Agent Assistant panel
5. Try the "Quick Analysis" button to test the integration

## Features Overview

### 🎯 Assessment Completion Agent

The agent provides intelligent assistance for your development phase assessments:

**Quick Actions:**
- **Quick Analysis** - Analyzes your current assessment progress
- **Get Suggestions** - Provides improvement recommendations  
- **Validate** - Checks assessment completeness and quality

**What the Agent Does:**
- Calculates completion percentages
- Identifies critical gaps in your assessment
- Prioritizes next steps based on impact and effort
- Suggests specific improvements with implementation guidance
- Validates assessment quality and consistency

### 💡 Smart Recommendations

The agent provides:
- **Prioritized Action Items** - Ranked by impact and urgency
- **Implementation Guidance** - Specific steps to improve scores
- **Risk Insights** - Potential problems and mitigation strategies
- **Quality Metrics** - Assessment completeness and consistency scores

## Usage Examples

### Basic Usage
```javascript
// The agent is already integrated in DevelopPage.js
// It automatically receives your current assessment data:
// - Security Standards checkboxes
// - Infrastructure setup choices  
// - Maintainability scores (H/M/L)
// - Test Coverage selections
```

### Manual Integration (Other Components)
```javascript
import { useAssessmentAgent } from '../hooks/useAssessmentAgent';

function YourComponent() {
  const { 
    analysis,
    isAnalyzing,
    runAnalysis,
    getSuggestions 
  } = useAssessmentAgent(assessmentData, 'develop');

  return (
    <div>
      <button onClick={runAnalysis} disabled={isAnalyzing}>
        {isAnalyzing ? 'Analyzing...' : 'Get AI Analysis'}
      </button>
      
      {analysis && (
        <div>
          <h3>Completion: {analysis.calculatedMetrics.overall.percentage}%</h3>
          <ul>
            {analysis.nextSteps?.map(step => (
              <li key={step.item}>{step.item} - {step.priority}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

## Cost Management

### API Usage Costs
- **Claude 3 Sonnet**: ~$15 per million input tokens, ~$75 per million output tokens
- **Typical Assessment Analysis**: ~1,000-2,000 tokens ($0.02-0.15 per analysis)
- **Daily Usage** (10 analyses): ~$0.20-1.50

### Budget Controls
The agent includes automatic retry limits and timeouts to prevent runaway costs.

### Recommendations
- Use the agent for complex assessments where AI insights add significant value
- Cache results are automatically managed (5-minute default)
- Consider running batch analyses for multiple projects

## Troubleshooting

### Common Issues

**"Claude API key not configured"**
- Check your `.env.local` file exists and contains `REACT_APP_CLAUDE_API_KEY`
- Restart your development server after adding environment variables
- Verify the API key format starts with `sk-ant-api03-`

**"Agent timeout" errors**
- Check your internet connection
- Verify your Claude API key is valid and has credits
- Try increasing `REACT_APP_AGENT_TIMEOUT` in your environment variables

**"Failed to parse response" errors**
- This usually indicates API rate limiting or temporary service issues
- The agent will retry automatically
- Check the browser console for detailed error messages

### Support

**Agent Not Responding:**
1. Check browser console for errors
2. Verify API key is correctly set
3. Test with a simple analysis first
4. Check network connectivity

**Performance Issues:**
1. Clear browser cache
2. Check for React strict mode warnings
3. Monitor network requests in DevTools

## Advanced Configuration

### Custom Agent Behavior
```javascript
// Configure agent timeout and retries
const agentConfig = {
  timeout: 45000, // 45 seconds
  retryAttempts: 2,
  enableLogging: true
};

const agent = new AssessmentCompletionAgent(agentConfig);
```

### Batch Processing
```javascript
import { useBatchAssessmentAgent } from '../hooks/useAssessmentAgent';

// Process multiple assessments
const { runBatchAnalysis } = useBatchAssessmentAgent();

const assessmentBatch = [
  { assessmentData: designData, phase: 'design', id: 'design-1' },
  { assessmentData: developData, phase: 'develop', id: 'develop-1' }
];

await runBatchAnalysis(assessmentBatch);
```

## Security Notes

- API keys are processed client-side only
- Assessment data is sent to Claude API for analysis
- No data is stored by the agent (unless cached locally)
- All network requests use HTTPS
- Consider data privacy requirements for your organization

## Next Steps

1. **Test Basic Functionality**: Complete a few assessment items and run analysis
2. **Explore Suggestions**: Try the improvement recommendations
3. **Integrate with Workflow**: Use agent insights to guide assessment completion
4. **Monitor Usage**: Track API costs and adjust usage patterns as needed

The agent is designed to learn your assessment patterns and provide increasingly relevant recommendations over time!
