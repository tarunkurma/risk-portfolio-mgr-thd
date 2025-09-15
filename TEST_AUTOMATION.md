# Test Automation Setup 🧪

## Overview
This project now has comprehensive test automation that runs tests automatically after code changes, ensuring code quality and preventing regressions.

## 🚀 Quick Start

### Run Tests Manually
```bash
# Run tests in watch mode (interactive)
npm run test:watch

# Run tests once
npm test

# Run tests with coverage
npm run test:coverage

# Run only tests related to changed files
npm run test:staged

# Quick test run (parallel execution)
npm run test:quick
```

## 🔄 Automatic Test Execution

### 1. Pre-Commit Hook (Fastest)
**When:** Before every git commit
**What:** Runs only tests for changed files
**Time:** ~5-10 seconds

The pre-commit hook automatically:
- Lints and fixes code style issues
- Runs tests for modified files only
- Blocks commit if tests fail

To bypass (emergency only):
```bash
git commit --no-verify -m "your message"
```

### 2. Pre-Push Hook (Comprehensive)
**When:** Before pushing to remote
**What:** Full test suite with coverage
**Time:** ~30-60 seconds

The pre-push hook:
- Runs complete test suite
- Generates coverage report
- Warns if coverage drops below 60%
- Blocks push if tests fail

To bypass (not recommended):
```bash
git push --no-verify
```

### 3. VS Code Integration
**When:** On file save or manually triggered
**What:** Configurable test runs

Available VS Code tasks:
- **Run Tests on Save** - Quick tests after saving files
- **Watch Tests** - Continuous test watching
- **Test Coverage** - Full coverage report

To use in VS Code:
1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Tasks: Run Task"
3. Select desired test task

### 4. GitHub Actions CI
**When:** On push to main/develop or PR
**What:** Full test suite in CI environment

Features:
- Tests on Ubuntu with Node 18
- Coverage reporting to Codecov
- PR comments with coverage stats
- Fails if coverage < 60%

## 📊 Coverage Requirements

### Minimum Thresholds
- **Overall:** 60% (enforced in CI)
- **Target:** 80% statements
- **Critical Components:** 90%+ (AI/Agent components)

### Check Current Coverage
```bash
npm run test:coverage
```

Coverage report available at:
- Terminal output
- `coverage/lcov-report/index.html` (HTML report)
- `coverage/coverage-summary.json` (JSON summary)

## 🛠️ Configuration Files

### Husky Hooks
- `.husky/pre-commit` - Runs before commit
- `.husky/pre-push` - Runs before push

### Lint-Staged
- `.lintstagedrc.json` - Defines what to run on staged files

### VS Code
- `.vscode/tasks.json` - VS Code test tasks

### GitHub Actions
- `.github/workflows/test.yml` - CI test pipeline

## 📝 Test Scripts Reference

| Script | Description | When to Use |
|--------|-------------|-------------|
| `npm test` | Interactive test mode | Development |
| `npm run test:watch` | Watch mode, reruns on changes | Active development |
| `npm run test:coverage` | Full coverage report | Before commits |
| `npm run test:staged` | Tests for staged files | Pre-commit hook |
| `npm run test:ci` | CI mode with coverage | GitHub Actions |
| `npm run test:quick` | Fast parallel execution | Quick checks |

## 🎯 Best Practices

### 1. Write Tests First (TDD)
```javascript
// Write test first
it('should calculate maturity score', () => {
  expect(calculateScore(data)).toBe(75);
});

// Then implement
function calculateScore(data) {
  // Implementation
}
```

### 2. Keep Tests Fast
- Mock external dependencies
- Use focused tests during development
- Run full suite before pushing

### 3. Maintain Coverage
- Don't merge PRs that reduce coverage
- Add tests for new features
- Refactor tests when refactoring code

### 4. Use Watch Mode
During development:
```bash
npm run test:watch
```
Tests run automatically as you code!

## 🚨 Troubleshooting

### Tests Failing on Commit
```bash
# Check which tests are failing
npm test

# Fix and try again
git add .
git commit -m "message"
```

### Coverage Too Low
```bash
# Check coverage details
npm run test:coverage

# Open HTML report
open coverage/lcov-report/index.html
```

### Husky Not Running
```bash
# Reinstall husky
npm run prepare

# Verify hooks are executable
ls -la .husky/
```

### Skip Hooks (Emergency Only)
```bash
# Skip pre-commit
git commit --no-verify

# Skip pre-push
git push --no-verify

# Skip both
HUSKY=0 git push
```

## 📈 Coverage History

| Date | Coverage | Notes |
|------|----------|-------|
| Phase 1 | 52.6% | Fixed test infrastructure |
| Phase 2 | 66.76% | Added AI component tests |
| Target | 80%+ | Ongoing improvement |

## 🎉 Benefits

1. **Catch Bugs Early** - Tests run before code reaches main branch
2. **Maintain Quality** - Automated coverage checks
3. **Fast Feedback** - Immediate test results on changes
4. **Confidence** - Know your changes don't break existing features
5. **Documentation** - Tests serve as living documentation

## 🔗 Related Documentation

- [Test Enhancement Phase 1](./TEST_ENHANCEMENT_PHASE1.md)
- [Test Enhancement Phase 2](./TEST_ENHANCEMENT_PHASE2.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

---

## Quick Reference Card

```bash
# Daily Development
npm run test:watch          # Keep running while coding

# Before Committing
npm run test:coverage       # Check coverage
git add .                   # Stage changes
git commit -m "feat: ..."   # Auto-runs tests

# Before Pushing
git push                    # Auto-runs full test suite

# CI/CD
# Automatic on push/PR      # GitHub Actions runs tests
```

---

*Test automation configured successfully. Happy testing! 🚀*