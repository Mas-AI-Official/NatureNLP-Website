# Enable GitHub Pages - Step by Step Guide

## Method 1: Using GitHub Web Interface (Recommended)

1. **Navigate to Repository Settings:**
   - Go to: https://github.com/Mas-AI-Official/NatureNLP
   - Click on **Settings** (top menu)

2. **Go to Pages Section:**
   - In the left sidebar, click **Pages**

3. **Configure Source:**
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **Save**

4. **Wait for Deployment:**
   - GitHub will build and deploy your site
   - This usually takes 1-2 minutes
   - You'll see a green checkmark when it's ready

5. **Verify:**
   - Your site will be available at: https://mas-ai-official.github.io/NatureNLP/
   - Or with custom domain: https://naturenlp.mas-ai.co (after DNS setup)

## Method 2: Using GitHub CLI (If Installed)

If you have GitHub CLI installed, you can run:

```bash
gh api repos/Mas-AI-Official/NatureNLP/pages -X POST \
  -f source[type]=branch \
  -f source[branch]=main \
  -f source[path]=/
```

## Method 3: Automatic via GitHub Actions

A GitHub Actions workflow has been added (`.github/workflows/pages.yml`) that will automatically deploy when you push to the `main` branch.

However, you still need to enable GitHub Pages in Settings first:
1. Go to Settings → Pages
2. Under "Source", select "GitHub Actions" instead of "Deploy from a branch"
3. Save

## Current Status

✅ Repository is ready for GitHub Pages:
- All files are in place
- `.nojekyll` file exists (required)
- `CNAME` file exists (for custom domain)
- GitHub Actions workflow created

⏳ **Action Required:**
- Enable GitHub Pages in repository settings (see Method 1 above)

## Troubleshooting

If the site doesn't appear after enabling:
1. Check the "Actions" tab for any errors
2. Wait 2-5 minutes for initial deployment
3. Clear browser cache
4. Check that all files are in the `main` branch

