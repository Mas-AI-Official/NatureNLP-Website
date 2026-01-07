# 🔧 NatureNLP Website Troubleshooting Guide

## Current Issues Detected

### Issue 1: GitHub Pages Not Enabled ❌
**Status:** GitHub Pages returns 404
**URL Tested:** https://mas-ai-official.github.io/NatureNLP/
**Result:** `HTTP/1.1 404 Not Found`

**Solution:** Enable GitHub Pages in repository settings

### Issue 2: DNS Not Configured ❌
**Status:** DNS record doesn't exist
**Domain:** `naturenlp.mas-ai.co`
**Result:** `Non-existent domain`

**Solution:** Add CNAME record in DNS provider

## Step-by-Step Fix

### Fix 1: Enable GitHub Pages (REQUIRED FIRST)

1. **Go to GitHub Pages Settings:**
   - Open: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
   - You must be logged in with access to the repository

2. **Configure Source:**
   - Under **"Source"** section:
     - Select **"Deploy from a branch"**
     - **Branch:** Select `main`
     - **Folder:** Select `/ (root)`
   - Click **"Save"**

3. **Wait for Deployment:**
   - GitHub will show "Your site is ready to be published"
   - Wait 1-2 minutes for first deployment
   - You'll see a green checkmark when ready

4. **Verify:**
   - Test: https://mas-ai-official.github.io/NatureNLP/
   - Should return 200 OK (not 404)
   - Site should load

**⚠️ IMPORTANT:** Do this FIRST before configuring DNS!

### Fix 2: Configure DNS (After GitHub Pages Works)

1. **Identify Your DNS Provider:**
   - Where is `mas-ai.co` DNS managed?
   - Common providers: Cloudflare, Namecheap, GoDaddy, AWS Route 53

2. **Add CNAME Record:**
   - **Type:** CNAME
   - **Name/Host:** `naturenlp` (or `naturenlp.mas-ai.co` depending on provider)
   - **Value/Target:** `mas-ai-official.github.io`
   - **TTL:** 3600 (or default)

3. **Save and Wait:**
   - DNS changes can take 5 minutes to 48 hours
   - Usually propagates in 15-60 minutes

4. **Verify DNS:**
   ```powershell
   nslookup naturenlp.mas-ai.co
   ```
   Should return: `mas-ai-official.github.io`

### Fix 3: Configure Custom Domain in GitHub (After DNS Works)

1. **Go to GitHub Pages Settings:**
   - https://github.com/Mas-AI-Official/NatureNLP/settings/pages

2. **Add Custom Domain:**
   - Under **"Custom domain"**, enter: `naturenlp.mas-ai.co`
   - Click **"Save"**

3. **Wait for Verification:**
   - GitHub will verify DNS (1-5 minutes)
   - You'll see a checkmark when verified

4. **Enable HTTPS:**
   - After verification, check **"Enforce HTTPS"**
   - GitHub will provision SSL certificate (may take up to 24 hours)

## Quick Diagnostic Commands

### Check GitHub Pages Status:
```powershell
curl -I https://mas-ai-official.github.io/NatureNLP/
```
**Expected:** `HTTP/1.1 200 OK` (not 404)

### Check DNS:
```powershell
nslookup naturenlp.mas-ai.co
```
**Expected:** Should resolve to `mas-ai-official.github.io`

### Check Custom Domain:
```powershell
curl -I https://naturenlp.mas-ai.co
```
**Expected:** `HTTP/1.1 200 OK` (after DNS and GitHub config)

## Common Issues

### Issue: GitHub Pages Still 404 After Enabling
**Possible Causes:**
- Wrong branch selected (should be `main`)
- Wrong folder selected (should be `/ (root)`)
- Repository is private (GitHub Pages requires public repo)
- Build failed (check Actions tab)

**Solution:**
- Verify branch and folder settings
- Check repository is public
- Check Actions tab for errors

### Issue: DNS Not Resolving
**Possible Causes:**
- CNAME record not added
- Wrong target value
- DNS not propagated yet
- Conflicting A record

**Solution:**
- Verify CNAME record exists
- Ensure target is exactly `mas-ai-official.github.io`
- Wait longer for propagation
- Remove any A records for the subdomain

### Issue: Custom Domain Not Verifying
**Possible Causes:**
- DNS not propagated yet
- Wrong CNAME target
- GitHub Pages not enabled first

**Solution:**
- Wait for DNS propagation (use nslookup to verify)
- Ensure CNAME points to `mas-ai-official.github.io`
- Enable GitHub Pages first, then add custom domain

## Priority Order

**Do these in order:**

1. ✅ **FIRST:** Enable GitHub Pages
   - Site must work at: https://mas-ai-official.github.io/NatureNLP/
   - This is REQUIRED before anything else

2. ✅ **SECOND:** Configure DNS
   - Add CNAME record
   - Wait for propagation

3. ✅ **THIRD:** Configure custom domain in GitHub
   - Add domain in GitHub Pages settings
   - Wait for verification
   - Enable HTTPS

## Current Status

- ❌ GitHub Pages: Not enabled (404 error)
- ❌ DNS: Not configured (domain doesn't exist)
- ❌ Custom Domain: Cannot configure until above are done

## Next Action

**IMMEDIATE:** Enable GitHub Pages at:
https://github.com/Mas-AI-Official/NatureNLP/settings/pages

Once GitHub Pages is enabled and working, then proceed with DNS configuration.

