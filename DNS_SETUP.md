# DNS Configuration for naturenlp.mas-ai.co

## Overview

To make the NatureNLP website accessible at `https://naturenlp.mas-ai.co`, you need to add a CNAME record in your DNS settings.

## Step-by-Step DNS Configuration

### 1. Identify Your DNS Provider

Common DNS providers:
- Cloudflare
- Namecheap
- GoDaddy
- Google Domains
- AWS Route 53
- Your domain registrar

### 2. Add CNAME Record

**Record Details:**
- **Type**: CNAME
- **Name/Host**: `naturenlp` (or `naturenlp.mas-ai.co` depending on provider)
- **Value/Target**: `mas-ai-official.github.io`
- **TTL**: 3600 (or default, usually 1 hour)

**Examples by Provider:**

#### Cloudflare:
1. Go to DNS → Records
2. Click "Add record"
3. Type: `CNAME`
4. Name: `naturenlp`
5. Target: `mas-ai-official.github.io`
6. Proxy status: DNS only (gray cloud) or Proxied (orange cloud)
7. Save

#### Namecheap:
1. Go to Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. Type: `CNAME Record`
4. Host: `naturenlp`
5. Value: `mas-ai-official.github.io`
6. TTL: Automatic
7. Save

#### GoDaddy:
1. Go to DNS Management
2. Click "Add"
3. Type: `CNAME`
4. Name: `naturenlp`
5. Value: `mas-ai-official.github.io`
6. TTL: 1 Hour
7. Save

### 3. Verify DNS Propagation

After adding the CNAME record, verify it's working:

```bash
# Using command line (Windows PowerShell)
nslookup naturenlp.mas-ai.co

# Or using online tools:
# - https://dnschecker.org
# - https://www.whatsmydns.net
```

Expected result: Should resolve to `mas-ai-official.github.io`

### 4. Configure GitHub Pages Custom Domain

Once DNS is configured:

1. Go to: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
2. Under **Custom domain**, enter: `naturenlp.mas-ai.co`
3. Click **Save**
4. Wait for GitHub to verify the DNS (usually 1-5 minutes)
5. Check **Enforce HTTPS** (will be available after verification)

### 5. Wait for Propagation

- DNS changes can take 5 minutes to 48 hours to propagate globally
- Usually takes 15-60 minutes
- Use DNS checker tools to monitor propagation

### 6. Test the Custom Domain

Once DNS has propagated and GitHub has verified:
- Visit: https://naturenlp.mas-ai.co
- Should redirect to your GitHub Pages site
- HTTPS will be automatically enabled

## Troubleshooting

### DNS Not Resolving
- Wait longer (up to 48 hours)
- Check for typos in the CNAME record
- Verify the record was saved correctly
- Check if there's a conflicting A record

### GitHub Not Verifying Domain
- Ensure DNS has propagated (check with nslookup)
- Make sure CNAME points exactly to `mas-ai-official.github.io`
- Remove any A records for the subdomain
- Wait 5-10 minutes and try again

### HTTPS Not Working
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- Clear browser cache

## Current Status

✅ **CNAME file created** in repository: `naturenlp.mas-ai.co`
⏳ **Action Required**: Add CNAME DNS record as described above

## Alternative: Use GitHub Pages URL

If DNS setup is delayed, the site is still accessible at:
- https://mas-ai-official.github.io/NatureNLP/

The custom domain can be configured later without affecting the site.

