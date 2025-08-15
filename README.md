
# Comprehensive Maturity Dashboard

A modern, visually engaging web application for assessing and visualizing software lifecycle maturity, template inspired by Stable Kernel's design system.

## Features
- Lifecycle phase timeline (Design, Refine, Develop, Stabilize, Deploy)
- Comprehensive risk dashboard with visual charts
- Themed UI matching Stable Kernel's branding
- Responsive layout and modern navigation
- Detailed phase breakdowns with icons and bullet points
- Styled footer with social links

## Tech Stack
- React 19
- styled-components
- recharts (for charts)
- react-icons
- Create React App (PWA template)

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm
- Claude API key from [Anthropic Console](https://console.anthropic.com/) (for AI features)

### Installation
```bash
npm install
```

### Configuration
1. Create a `.env.local` file in the project root:
```bash
REACT_APP_CLAUDE_API_KEY=your-claude-api-key-here
REACT_APP_AI_FEATURES_ENABLED=true
```

2. Replace `your-claude-api-key-here` with your actual Claude API key (starts with `sk-ant-api03-`)

### Running the App
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Running Tests
```bash
npm test
```

## Project Structure
```
src/
  App.js
  Header.js
  Footer.js
  Homepage.js
  LifecycleTimeline.js
  RiskDashboard.js
  theme.js
  GlobalStyles.js
  ...
```

## Customization
- Update phase details and bullet points in `Homepage.js`.
- Adjust theme colors and fonts in `theme.js`.
- Add or modify charts in `RiskDashboard.js`.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Repository Secrets

1. **Go to your GitHub repository settings**
2. **Navigate to "Secrets and variables" → "Actions"**
3. **Click "New repository secret"**
4. **Add the following secret:**
   - **Name**: `CLAUDE_API_KEY`
   - **Value**: Your actual Claude API key (starts with `sk-ant-api03-`)

### Automatic Deployment

- **Triggers**: Every push to `main` branch
- **Process**: Tests → Build → Deploy
- **URL**: https://tarunkurma.github.io/risk-portfolio-mgr-thd
- **AI Features**: Fully enabled with secure API key

### Manual Deployment (Alternative)

```bash
# Build with your local API key
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Deployment Status

Check the **Actions** tab in your GitHub repository to monitor deployment progress.

---

## 🤖 AI Features

This application includes intelligent assessment completion agents powered by Claude AI:

- **Assessment Analysis**: Real-time analysis of maturity assessments
- **Improvement Suggestions**: AI-generated recommendations
- **Progress Tracking**: Intelligent completion status monitoring
- **Demo Mode**: Try features without an API key

### AI Agent Components

- **FloatingAssistant**: Interactive AI helper (bottom-right corner)
- **AgentDemo**: Demonstration mode with mock responses
- **AssessmentCompletionAgent**: Core AI analysis engine

---

## Credits
- Inspired by [Stable Kernel](https://stablekernel.com/)
- Icons from [react-icons](https://react-icons.github.io/react-icons/)
- Charts by [Recharts](https://recharts.org/)
- AI powered by [Claude (Anthropic)](https://www.anthropic.com/)

![Product Development Process - Risk Portfolio Template](https://github.com/user-attachments/assets/48ad6cf3-a33e-4808-a7f6-25e98a82866d)

---

## 🔐 Security Notes

- **API Keys**: Stored securely as GitHub repository secrets
- **Environment Variables**: Never committed to version control
- **Build Time**: API key injected safely during GitHub Actions build
- **Client-Side**: API key used only for frontend AI features

---

© {new Date().getFullYear()} Stable Kernel (for design inspiration). All rights reserved. 
