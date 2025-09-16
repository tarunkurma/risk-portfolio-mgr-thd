// THD Assessment Data Service
// Centralized data management for The Home Depot capability maturity assessments

export const thdAssessmentScores = {
  maintainability: {
    releasePipelineAutomation: 'M',
    sdkManagementComplexity: 'L',
    configurationManagement: 'M',
    nativeWebviewDataSharing: 'M',
    legacyCodeRemoval: 'L'
  },
  performance: {
    appStartupPerformance: 'L',
    webViewLoadTime: 'M',
    coreWebVitals: 'L',
    cacheOptimization: 'M',
    networkBandwidthOptimization: 'L'
  },
  reliability: {
    iosCrashFreeRate: 'M',
    androidCrashFreeRate: 'M',
    crashReproducibility: 'L',
    crashImpactAnalysis: 'M',
    reliabilityTooling: 'M'
  },
  testing: {
    unitTestCoverage: 'M',
    endToEndTestFramework: 'M',
    testInfrastructure: 'M',
    crossTeamTestAccessibility: 'L',
    testToolOptimization: 'M'
  },
  technology: {
    platformMigrationProgress: 'M',
    multiDeviceStrategy: 'L',
    modularArchitecture: 'L',
    codeHealthMetrics: 'M',
    technologyStackModernization: 'M'
  },
  developmentPractices: {
    cicdPipelineAutomation: 'L',
    codeQualityGates: 'L',
    buildArtifactManagement: 'M',
    manualProcessElimination: 'L',
    aiAssistedDevelopment: 'L'
  }
};

// Score conversion utilities
export const getScoreValue = (score) => {
  switch(score) {
    case 'H': return 3;
    case 'M': return 2;
    case 'L': return 1;
    default: return 2;
  }
};

export const getScoreColor = (score) => {
  switch(score) {
    case 'H': return '#28a745';
    case 'M': return '#ffc107';
    case 'L': return '#dc3545';
    case 'High': return '#28a745';
    case 'Medium': return '#ffc107';
    case 'Low': return '#dc3545';
    default: return '#6c757d';
  }
};

export const getAverageScoreLabel = (averageValue) => {
  if (averageValue >= 2.5) return 'High';
  if (averageValue >= 1.5) return 'Medium';
  return 'Low';
};

export const convertToPercentage = (score) => {
  return Math.round((getScoreValue(score) / 3) * 100);
};

// Calculate category averages
export const calculateCategoryAverage = (categoryScores) => {
  const scores = Object.values(categoryScores);
  const totalValue = scores.reduce((sum, score) => sum + getScoreValue(score), 0);
  const averageValue = totalValue / scores.length;
  return Math.round((averageValue / 3) * 100); // Convert to percentage
};

// Calculate overall maturity score
export const calculateOverallScore = () => {
  const allScores = [];
  Object.values(thdAssessmentScores).forEach(categoryScores => {
    Object.values(categoryScores).forEach(score => {
      allScores.push(getScoreValue(score));
    });
  });
  
  const totalValue = allScores.reduce((sum, score) => sum + score, 0);
  const averageValue = totalValue / allScores.length;
  return Math.round((averageValue / 3) * 100); // Convert to percentage
};

// Calculate develop phase specific score (weighted average of all categories)
export const calculateDevelopPhaseScore = () => {
  const categoryAverages = [
    calculateCategoryAverage(thdAssessmentScores.maintainability),
    calculateCategoryAverage(thdAssessmentScores.performance),
    calculateCategoryAverage(thdAssessmentScores.reliability),
    calculateCategoryAverage(thdAssessmentScores.testing),
    calculateCategoryAverage(thdAssessmentScores.technology),
    calculateCategoryAverage(thdAssessmentScores.developmentPractices)
  ];
  
  return Math.round(categoryAverages.reduce((sum, avg) => sum + avg, 0) / categoryAverages.length);
};

// Calculate severity distribution based on L/M/H counts
export const calculateSeverityDistribution = () => {
  let highCount = 0, mediumCount = 0, lowCount = 0;
  
  Object.values(thdAssessmentScores).forEach(categoryScores => {
    Object.values(categoryScores).forEach(score => {
      switch(score) {
        case 'H': highCount++; break;
        case 'M': mediumCount++; break;
        case 'L': lowCount++; break;
        default: break;
      }
    });
  });

  return [
    { name: 'High Risk (Low Score)', value: lowCount, color: '#dc3545' },
    { name: 'Medium Risk', value: mediumCount, color: '#ffc107' },
    { name: 'Low Risk (High Score)', value: highCount, color: '#28a745' }
  ];
};

// THD-specific improvement areas based on current assessment scores
export const getTHDImprovementAreas = () => {
  const improvements = [];
  
  // Check each category for low scores and add specific improvement areas
  if (thdAssessmentScores.maintainability.releasePipelineAutomation === 'M') {
    improvements.push('Release pipeline automation (30-40 min builds, manual GitHub actions)');
  }
  
  if (thdAssessmentScores.maintainability.sdkManagementComplexity === 'L') {
    improvements.push('SDK management complexity (Android: 103 SDKs, iOS: 44 SDKs)');
  }
  
  if (thdAssessmentScores.performance.appStartupPerformance === 'L') {
    improvements.push('App startup performance (network bandwidth dependent, customer complaints)');
  }
  
  if (thdAssessmentScores.performance.coreWebVitals === 'L') {
    improvements.push('Core Web Vitals optimization (Android only, missing iOS coverage)');
  }
  
  if (thdAssessmentScores.reliability.crashReproducibility === 'L') {
    improvements.push('Crash reproducibility challenges (difficult to reproduce crashes)');
  }
  
  if (thdAssessmentScores.testing.crossTeamTestAccessibility === 'L') {
    improvements.push('Cross-team test accessibility barriers (complex setup for product teams)');
  }
  
  if (thdAssessmentScores.technology.multiDeviceStrategy === 'L') {
    improvements.push('Multi-device strategy gaps (no tablet, watch, auto support)');
  }
  
  if (thdAssessmentScores.technology.modularArchitecture === 'L') {
    improvements.push('Modular architecture implementation (features as importable products)');
  }
  
  if (thdAssessmentScores.developmentPractices.cicdPipelineAutomation === 'L') {
    improvements.push('CI/CD pipeline fully manual (unit tests, regressions, releases)');
  }
  
  if (thdAssessmentScores.developmentPractices.codeQualityGates === 'L') {
    improvements.push('Automated code quality gates missing (no coverage thresholds)');
  }
  
  return improvements;
};

// THD-specific completed improvements
export const getTHDCompletedImprovements = () => {
  return [
    'Implemented Embrace tooling for reliability tracking',
    'Established 80% branch coverage requirement for unit tests',
    'Set up Bugbear E2E testing framework with WebDriverIO',
    'Configured SauceLabs device testing infrastructure',
    'Started Swift migration (63% complete) and Kotlin migration (59% complete)',
    'Implemented selective WebView caching with native rendering UX'
  ];
};

// Transform THD data to dashboard format
export const transformTHDDataForDashboard = () => {
  const maturityCategories = [
    { 
      name: 'Maintainability', 
      value: calculateCategoryAverage(thdAssessmentScores.maintainability),
      fullMark: 100,
      color: '#ff851b'
    },
    { 
      name: 'Performance', 
      value: calculateCategoryAverage(thdAssessmentScores.performance),
      fullMark: 100,
      color: '#dc3545'
    },
    { 
      name: 'Reliability', 
      value: calculateCategoryAverage(thdAssessmentScores.reliability),
      fullMark: 100,
      color: '#28a745'
    },
    { 
      name: 'Testing', 
      value: calculateCategoryAverage(thdAssessmentScores.testing),
      fullMark: 100,
      color: '#007bff'
    },
    { 
      name: 'Technology', 
      value: calculateCategoryAverage(thdAssessmentScores.technology),
      fullMark: 100,
      color: '#6f42c1'
    },
    { 
      name: 'Dev Practices', 
      value: calculateCategoryAverage(thdAssessmentScores.developmentPractices),
      fullMark: 100,
      color: '#fd7e14'
    }
  ];

  // Map categories to lifecycle phases with realistic estimates
  const phaseScores = [
    { phase: 'Design', score: 75, phaseName: 'Design' },
    { phase: 'Refine', score: 68, phaseName: 'Refine' },
    { phase: 'Develop', score: calculateDevelopPhaseScore(), phaseName: 'Develop' },
    { phase: 'Stabilize', score: calculateCategoryAverage(thdAssessmentScores.reliability), phaseName: 'Stabilize' },
    { phase: 'Deploy', score: calculateCategoryAverage(thdAssessmentScores.developmentPractices), phaseName: 'Deploy' }
  ];

  const overallScore = calculateOverallScore();
  const maturitySeverity = calculateSeverityDistribution();
  const improvementAreas = getTHDImprovementAreas();
  const completedImprovements = getTHDCompletedImprovements();

  return {
    overallScore,
    phaseScores,
    maturityCategories,
    maturitySeverity,
    improvementAreas,
    completedImprovements,
    lastUpdated: new Date().toISOString()
  };
};

// Category-specific insights for dashboard display
export const getCategoryInsights = () => {
  return {
    maintainability: {
      highlight: "Release pipeline automation needs attention",
      trend: "SDK complexity (103 Android, 44 iOS) is major challenge",
      color: "#ff851b",
      urgency: "Medium"
    },
    performance: {
      highlight: "Customer perception: app is 'slow' or 'clunky'",
      trend: "App startup performance critical issue",
      color: "#dc3545",
      urgency: "High"
    },
    reliability: {
      highlight: "iOS: 99.85% → 99.9% crash-free rate goal for 2024",
      trend: "Crash reproducibility needs improvement",
      color: "#28a745",
      urgency: "Medium"
    },
    testing: {
      highlight: "Cross-team accessibility barriers limit collaboration",
      trend: "Bugbear/SauceLabs working but complex for product teams",
      color: "#007bff",
      urgency: "High"
    },
    technology: {
      highlight: "Platform migrations in progress (Swift 63%, Kotlin 59%)",
      trend: "Multi-device support missing (tablet, watch, auto)",
      color: "#6f42c1",
      urgency: "Medium"
    },
    developmentPractices: {
      highlight: "Fully manual CI/CD pipeline across all steps",
      trend: "AI-assisted development interest but no implementation",
      color: "#fd7e14",
      urgency: "High"
    }
  };
};
