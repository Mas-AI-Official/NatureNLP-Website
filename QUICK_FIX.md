# 🚨 QUICK FIX - NatureNLP Website Not Loading

## Problem Identified

❌ **GitHub Pages is NOT enabled** - This is why the site returns 404
❌ **DNS is NOT configured** - This is why the custom domain doesn't work

## Fix in 2 Steps (10 minutes total)

### ⚡ STEP 1: Enable GitHub Pages (2 minutes) - DO THIS FIRST!

1. **Open this URL in your browser:**
   ```
   https://github.com/Mas-AI-Official/NatureNLP/settings/pages
   ```

2. **You'll see a "Source" section. Configure it:**
   - **Deploy from a branch** (select this option)
   - **Branch:** Select `main` from dropdown
   - **Folder:** Select `/ (root)` from dropdown
   - Click the **"Save"** button

3. **Wait 1-2 minutes:**
   - GitHub will show "Your site is ready to be published"
   - You'll see a green checkmark ✅ when ready
   - A message will appear: "Your site is live at https://mas-ai-official.github.io/NatureNLP/"

4. **Test it:**
   - Open: https://mas-ai-official.github.io/NatureNLP/
   - Should now load (not 404)

**✅ Once this works, proceed to Step 2**

---

### ⚡ STEP 2: Configure DNS (5-10 minutes)

**You need to add a CNAME record where mas-ai.co DNS is managed.**

#### Find Your DNS Provider:
- Where did you buy/register `mas-ai.co`?
- Common: Cloudflare, Namecheap, GoDaddy, Google Domains, AWS Route 53

#### Add CNAME Record:

**Record Details:**
- **Type:** CNAME
- **Name/Host:** `naturenlp` (just "naturenlp", not the full domain)
- **Value/Target:** `mas-ai-official.github.io` (exactly this)
- **TTL:** 3600 or default

#### Examples by Provider:

**Cloudflare:**
1. Login → Select domain → DNS → Records
2. Click "Add record"
3. Type: CNAME
4. Name: `naturenlp`
5. Target: `mas-ai-official.github.io`
6. Proxy status: DNS only (gray cloud) or Proxied (orange cloud)
7. Save

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add New Record
3. Type: CNAME Record
4. Host: `naturenlp`
5. Value: `mas-ai-official.github.io`
6. Save

**GoDaddy:**
1. DNS Management
2. Add
3. Type: CNAME
4. Name: `naturenlp`
5. Value: `mas-ai-official.github.io`
6. Save

#### Verify DNS (after 5-15 minutes):
```powershell
nslookup naturenlp.mas-ai.co
```
Should return: `mas-ai-official.github.io`

---

### ⚡ STEP 3: Configure Custom Domain in GitHub (2 minutes)

**Do this AFTER Step 1 and Step 2 are complete:**

1. **Go back to GitHub Pages settings:**
   ```
   https://github.com/Mas-AI-Official/NatureNLP/settings/pages
   ```

2. **Under "Custom domain" section:**
   - Enter: `naturenlp.mas-ai.co`
   - Click **"Save"**

3. **Wait for verification:**
   - GitHub will verify DNS (1-5 minutes)
   - You'll see a checkmark ✅ when verified

4. **Enable HTTPS:**
   - After verification, check **"Enforce HTTPS"**
   - GitHub will provision SSL (may take up to 24 hours)

---

## Current Status Check

Run this to check current status:
```powershell
cd D:\Ideas\naturenlp-website
.\setup_pages.ps1
```

## Priority

**DO STEP 1 FIRST** - GitHub Pages must be enabled before anything else will work!

The custom domain (naturenlp.mas-ai.co) won't work until:
1. ✅ GitHub Pages is enabled (Step 1)
2. ✅ DNS is configured (Step 2)
3. ✅ Custom domain is added in GitHub (Step 3)

## Need Help?

- **GitHub Pages not enabling?** Check repository is public (not private)
- **DNS not working?** Wait longer (can take up to 48 hours, usually 15-60 min)
- **Still 404?** Clear browser cache, try incognito mode

## Quick Links

- **Enable GitHub Pages:** https://github.com/Mas-AI-Official/NatureNLP/settings/pages
- **Test GitHub Pages URL:** https://mas-ai-official.github.io/NatureNLP/
- **Test Custom Domain:** https://naturenlp.mas-ai.co (after DNS setup)

