# GitHub Pages Setup

The NatureNLP website is configured for GitHub Pages deployment.

## GitHub Pages URL

Once GitHub Pages is enabled, the website will be available at:
**https://mas-ai-official.github.io/NatureNLP/**

## Setup Instructions

1. Go to the repository: https://github.com/Mas-AI-Official/NatureNLP
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait a few minutes for GitHub to build and deploy the site

## Custom Domain (Optional)

If you want to use `naturenlp.mas-ai.co`:

1. Add a `CNAME` file in the root with: `naturenlp.mas-ai.co`
2. Configure DNS:
   - Add a CNAME record: `naturenlp.mas-ai.co` → `mas-ai-official.github.io`
3. In GitHub Pages settings, add the custom domain

## Current Status

- ✅ `.nojekyll` file added (required for GitHub Pages)
- ✅ All files are in the repository
- ⚠️ Video files excluded (too large for GitHub)
- ✅ Ready for GitHub Pages deployment

## Linking from mas-ai.co

The `mas-ai/naturenlp.html` page has been updated to link to:
- GitHub Pages: https://mas-ai-official.github.io/NatureNLP/
- Or custom domain: https://naturenlp.mas-ai.co/ (once configured)

