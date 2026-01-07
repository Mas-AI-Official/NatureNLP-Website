# NatureNLP Website Deployment Notes

## Current Status

✅ **Website is live on GitHub Pages:**
- URL: https://mas-ai-official.github.io/NatureNLP/
- Repository: https://github.com/Mas-AI-Official/NatureNLP

✅ **Connected to mas-ai.co:**
- The NatureNLP card on https://mas-ai.co now links directly to the GitHub Pages website
- Updated description to reflect "Efficiency-First NLP Research" focus

✅ **Custom Domain Setup:**
- CNAME file added: `naturenlp.mas-ai.co`
- Once DNS is configured, the site will be accessible at: https://naturenlp.mas-ai.co

## DNS Configuration Required

To enable the custom domain `naturenlp.mas-ai.co`:

1. **Add CNAME record in DNS:**
   - Type: CNAME
   - Name: `naturenlp`
   - Value: `mas-ai-official.github.io`
   - TTL: 3600 (or default)

2. **Verify in GitHub:**
   - Go to: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
   - Under "Custom domain", enter: `naturenlp.mas-ai.co`
   - Check "Enforce HTTPS" (after DNS propagates)

## Files Cleaned Up

From the Mas-AI-Official repository:
- ✅ Removed `index_old.html` (old version)
- ✅ Removed `index_new.html` (old version)
- ✅ Removed temporary/merge conflict files
- ✅ Updated NatureNLP card link in `index.html`

## Links Updated

1. **mas-ai.co/index.html:**
   - NatureNLP card now links to: https://mas-ai-official.github.io/NatureNLP/
   - Updated description to match new focus

2. **mas-ai.co/naturenlp.html:**
   - Already updated to link to GitHub Pages
   - Provides redirect/landing page

## Next Steps

1. **Enable GitHub Pages** (if not already):
   - Go to: https://github.com/Mas-AI-Official/NatureNLP/settings/pages
   - Source: `main` branch, `/ (root)` folder
   - Save

2. **Configure DNS** (for custom domain):
   - Add CNAME record as described above
   - Wait for DNS propagation (usually 5-60 minutes)

3. **Test the connection:**
   - Visit https://mas-ai.co
   - Click on the NatureNLP card
   - Should open the full NatureNLP website

## Video Files

⚠️ **Note:** Video files are not in the repository (too large for GitHub).
- Videos need to be hosted separately (CDN, Git LFS, or cloud storage)
- Update video paths in `video.html` once videos are hosted
- Or use YouTube/Vimeo embeds

## Maintenance

- All changes are pushed to GitHub
- Website auto-updates when changes are pushed to `main` branch
- Custom domain will work once DNS is configured

