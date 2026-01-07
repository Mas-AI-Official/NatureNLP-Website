# 🚨 URGENT: Enable GitHub Pages - Visual Guide

## The Problem
GitHub Pages is **NOT enabled** - that's why https://naturenlp.mas-ai.co/ returns 404.

## Solution: Enable GitHub Pages (2 minutes)

### Step-by-Step with Screenshots Guide:

#### 1. Open GitHub Repository Settings
**Click this link:** https://github.com/Mas-AI-Official/NatureNLP/settings/pages

**OR manually:**
- Go to: https://github.com/Mas-AI-Official/NatureNLP
- Click **"Settings"** tab (top menu, next to "Insights")
- Click **"Pages"** in the left sidebar

#### 2. Configure the Source
You'll see a section called **"Source"** with a dropdown.

**Select these options:**
- **"Deploy from a branch"** (first option in dropdown)
- **Branch:** Select `main` from the dropdown
- **Folder:** Select `/ (root)` from the dropdown

#### 3. Save
- Click the **"Save"** button
- You'll see a message: "Your site is ready to be published at..."

#### 4. Wait
- Wait 1-2 minutes
- Refresh the page
- You should see: "Your site is live at https://mas-ai-official.github.io/NatureNLP/"

#### 5. Test
Open: https://mas-ai-official.github.io/NatureNLP/
- Should show the NatureNLP website (not 404)

---

## Alternative: Use GitHub Actions (If Branch Method Doesn't Work)

If the branch method doesn't work, try GitHub Actions:

1. Go to: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
2. Under **"Source"**, select: **"GitHub Actions"** (instead of "Deploy from a branch")
3. Click **"Save"**
4. Go to **"Actions"** tab
5. You should see a workflow run automatically
6. Wait for it to complete (green checkmark)

---

## Troubleshooting

### "Settings" tab not visible?
- You need to be logged in
- You need to have admin/write access to the repository
- Check you're on the right repository: Mas-AI-Official/NatureNLP

### "Pages" option not in sidebar?
- Repository might be private (GitHub Pages requires public repo)
- Check repository visibility in Settings → General

### Still 404 after enabling?
- Wait 2-5 minutes (first deployment takes longer)
- Clear browser cache
- Try incognito/private browsing
- Check the "Actions" tab for errors

### Can't access the repository?
- Make sure you're logged into GitHub
- Check you have access to Mas-AI-Official organization
- Try: https://github.com/Mas-AI-Official/NatureNLP

---

## Quick Test Commands

After enabling, test with:
```powershell
curl -I https://mas-ai-official.github.io/NatureNLP/
```

**Expected:** `HTTP/1.1 200 OK` (not 404)

---

## Current Status

- ❌ GitHub Pages: **NOT ENABLED** (this is the problem)
- ✅ Repository: All files ready
- ✅ Configuration: Complete

**ACTION REQUIRED:** Enable GitHub Pages using the steps above.

Once enabled, the site will work at:
- https://mas-ai-official.github.io/NatureNLP/

Then configure DNS for the custom domain.

