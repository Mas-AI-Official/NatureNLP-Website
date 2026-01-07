# ✅ Step-by-Step: Enable GitHub Pages (Copy-Paste Ready)

## ⚠️ IMPORTANT: This MUST be done in your browser

I cannot enable GitHub Pages automatically - it requires clicking buttons in GitHub's web interface.

## Exact Steps (Follow These):

### 1. Open This URL:
```
https://github.com/Mas-AI-Official/NatureNLP/settings/pages
```

### 2. Look for "Source" Section
You'll see a dropdown that says "None" or is empty.

### 3. Click the Dropdown
Select: **"Deploy from a branch"**

### 4. Configure Branch
- **Branch:** Select `main` from the dropdown
- **Folder:** Select `/ (root)` from the dropdown

### 5. Click "Save" Button
A green button at the bottom of the section.

### 6. Wait
- You'll see: "Your site is ready to be published at..."
- Wait 1-2 minutes
- Refresh the page

### 7. Verify
You should see:
- ✅ Green checkmark
- Message: "Your site is live at https://mas-ai-official.github.io/NatureNLP/"

### 8. Test
Open in browser: https://mas-ai-official.github.io/NatureNLP/
- Should show the website (not 404 error)

---

## If You Don't See "Pages" Option:

**Possible reasons:**
1. Repository is private → Make it public (Settings → General → Change visibility)
2. Not logged in → Log into GitHub
3. No access → You need admin access to Mas-AI-Official organization

---

## If "Save" Button Doesn't Work:

1. Check you selected both Branch AND Folder
2. Try refreshing the page
3. Try a different browser
4. Check browser console for errors (F12)

---

## Alternative: Use GitHub Actions

If branch deployment doesn't work:

1. Same URL: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
2. Select: **"GitHub Actions"** (instead of "Deploy from a branch")
3. Click "Save"
4. Go to "Actions" tab
5. Wait for workflow to run (should auto-trigger)

---

## After Enabling - Test Commands:

```powershell
# Test GitHub Pages
curl -I https://mas-ai-official.github.io/NatureNLP/

# Should return: HTTP/1.1 200 OK
```

---

## Still Not Working?

**Check these:**
- [ ] Repository is public (not private)
- [ ] You're logged into GitHub
- [ ] You have admin access to the repository
- [ ] You selected both Branch AND Folder
- [ ] You clicked "Save"
- [ ] You waited 2-5 minutes
- [ ] You cleared browser cache

**Common Issues:**
- Private repository → Make public
- Wrong branch → Must be `main`
- Wrong folder → Must be `/ (root)`
- Not saved → Click "Save" button
- Cache → Clear browser cache or use incognito

---

## Need Help?

If you're stuck, check:
- Repository visibility: https://github.com/Mas-AI-Official/NatureNLP/settings
- Actions tab: https://github.com/Mas-AI-Official/NatureNLP/actions
- Pages settings: https://github.com/Mas-AI-Official/NatureNLP/settings/pages

