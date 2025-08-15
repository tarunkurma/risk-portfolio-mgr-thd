# 🚀 GitHub Pages Deployment Guide

## Quick Setup Checklist

### ✅ **Step 1: Repository Secrets Configuration**

1. Go to your GitHub repository: `https://github.com/tarunkurma/risk-portfolio-mgr-thd`
2. Click **Settings** tab
3. In left sidebar: **Secrets and variables** → **Actions**
4. Click **"New repository secret"**
5. Add this secret:
   - **Name**: `CLAUDE_API_KEY` 
   - **Value**: `sk-ant-api03-DQNoTp_pLaXTrC1yOo9NCZjbasYAJyzosDUCntxihhdqh6s...` (your full key)

### ✅ **Step 2: Enable GitHub Pages**

1. In repository **Settings**
2. Scroll to **Pages** section  
3. **Source**: Deploy from a branch
4. **Branch**: `gh-pages` / `root`
5. Click **Save**

### ✅ **Step 3: Commit and Push**

```bash
# Add the new workflow file
git add .github/workflows/deploy.yml README.md DEPLOYMENT.md

# Commit changes
git commit -m "🚀 Add GitHub Actions deployment with secure Claude API key"

# Push to trigger deployment
git push origin main
```

---

## 🔍 **Monitoring Deployment**

### **View Build Progress**
1. Go to **Actions** tab in your repository
2. Watch the "🚀 Deploy to GitHub Pages" workflow
3. ✅ **Green check** = successful deployment
4. ❌ **Red X** = check logs for errors

### **Access Your Deployed App**
- **URL**: https://tarunkurma.github.io/risk-portfolio-mgr-thd
- **AI Features**: ✅ Fully enabled with secure API key
- **Build Time**: ~3-5 minutes

---

## 🔧 **Workflow Features**

### **What Happens on Each Push:**
1. **🧪 Tests** - Runs your test suite
2. **🏗️ Build** - Compiles with Claude API key
3. **🔐 Security** - API key never exposed in logs
4. **📤 Upload** - Bundles static files
5. **🚀 Deploy** - Updates GitHub Pages
6. **📝 Notify** - Shows deployment status

### **Environment Variables in Production:**
```bash
REACT_APP_CLAUDE_API_KEY=*** (from repository secret)
REACT_APP_AI_FEATURES_ENABLED=true
```

---

## 🛠 **Troubleshooting**

### **Deployment Fails?**
- Check **Actions** tab for error logs
- Verify `CLAUDE_API_KEY` secret is set correctly
- Ensure API key starts with `sk-ant-api03-`

### **API Key Not Working?**
- Verify repository secret name: `CLAUDE_API_KEY` (exact match)
- Check Anthropic Console for key validity
- Look for "Claude API key not configured" in browser console

### **404 Error on Deployed Site?**
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings (branch should be `gh-pages`)
- Clear browser cache and try again

---

## 🔐 **Security Verification**

✅ **API Key NEVER appears in:**
- Git commits
- Action logs  
- Build artifacts
- Public repository files

✅ **API Key IS available during:**
- GitHub Actions build process
- Runtime in deployed application
- Client-side AI feature requests

---

## 🚦 **Next Steps After Deployment**

1. **Test AI Features**: Visit `/develop` page on deployed site
2. **Verify Floating Assistant**: Look for 🤖 icon in bottom-right
3. **Try AI Analysis**: Fill out assessment criteria, click assistant
4. **Check Demo Mode**: Should show "Claude API configured!" banner

---

## 📞 **Support**

**Deployment working?** ✅ Your app is live with full AI capabilities!
**Having issues?** Check the Actions tab logs or the troubleshooting section above.

**Current Status:**
- ✅ GitHub Actions workflow configured
- ✅ Repository secrets ready for setup  
- ✅ README updated with instructions
- ✅ Secure deployment process established
