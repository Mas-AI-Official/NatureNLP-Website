# NatureNLP GitHub Pages Setup Script
# This script helps verify and guide through GitHub Pages setup

Write-Host "🌿 NatureNLP GitHub Pages Setup" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

# Check if GitHub CLI is installed
$ghInstalled = $false
try {
    $ghVersion = gh --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        $ghInstalled = $true
        Write-Host "✓ GitHub CLI found" -ForegroundColor Green
    }
} catch {
    $ghInstalled = $false
}

Write-Host "`n📋 Setup Checklist:" -ForegroundColor Cyan
Write-Host "-------------------" -ForegroundColor Cyan

# Check repository files
Write-Host "`n1. Repository Files:" -ForegroundColor Yellow
if (Test-Path "CNAME") {
    $cnameContent = Get-Content "CNAME" -Raw
    Write-Host "   ✓ CNAME file exists: $cnameContent" -ForegroundColor Green
} else {
    Write-Host "   ✗ CNAME file missing" -ForegroundColor Red
}

if (Test-Path ".nojekyll") {
    Write-Host "   ✓ .nojekyll file exists" -ForegroundColor Green
} else {
    Write-Host "   ✗ .nojekyll file missing" -ForegroundColor Red
}

if (Test-Path "index.html") {
    Write-Host "   ✓ index.html exists" -ForegroundColor Green
} else {
    Write-Host "   ✗ index.html missing" -ForegroundColor Red
}

# Check GitHub Pages status (if GitHub CLI is available)
Write-Host "`n2. GitHub Pages Status:" -ForegroundColor Yellow
if ($ghInstalled) {
    Write-Host "   Checking GitHub Pages status..." -ForegroundColor Cyan
    try {
        $pagesStatus = gh api repos/Mas-AI-Official/NatureNLP/pages 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "   ✓ GitHub Pages is configured" -ForegroundColor Green
            Write-Host "   $pagesStatus" -ForegroundColor Gray
        } else {
            Write-Host "   ⚠ GitHub Pages not yet enabled" -ForegroundColor Yellow
            Write-Host "   Run: gh api repos/Mas-AI-Official/NatureNLP/pages -X POST -f source[type]=branch -f source[branch]=main -f source[path]=/" -ForegroundColor Cyan
        }
    } catch {
        Write-Host "   ⚠ Could not check status (may need authentication)" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ⚠ GitHub CLI not installed" -ForegroundColor Yellow
    Write-Host "   Install from: https://cli.github.com/" -ForegroundColor Cyan
    Write-Host "   Or enable manually at: https://github.com/Mas-AI-Official/NatureNLP/settings/pages" -ForegroundColor Cyan
}

# DNS Check
Write-Host "`n3. DNS Configuration:" -ForegroundColor Yellow
Write-Host "   Checking DNS for naturenlp.mas-ai.co..." -ForegroundColor Cyan
try {
    $dnsResult = Resolve-DnsName -Name "naturenlp.mas-ai.co" -Type CNAME -ErrorAction SilentlyContinue
    if ($dnsResult) {
        Write-Host "   ✓ DNS CNAME record found" -ForegroundColor Green
        Write-Host "   Points to: $($dnsResult.NameHost)" -ForegroundColor Gray
        if ($dnsResult.NameHost -eq "mas-ai-official.github.io") {
            Write-Host "   ✓ DNS correctly configured!" -ForegroundColor Green
        } else {
            Write-Host "   ⚠ DNS points to: $($dnsResult.NameHost)" -ForegroundColor Yellow
            Write-Host "   Should point to: mas-ai-official.github.io" -ForegroundColor Yellow
        }
    } else {
        Write-Host "   ⚠ DNS record not found or not propagated yet" -ForegroundColor Yellow
        Write-Host "   Add CNAME: naturenlp → mas-ai-official.github.io" -ForegroundColor Cyan
    }
} catch {
    Write-Host "   ⚠ Could not resolve DNS (may not be configured yet)" -ForegroundColor Yellow
    Write-Host "   See DNS_SETUP.md for instructions" -ForegroundColor Cyan
}

# URLs
Write-Host "`n4. Website URLs:" -ForegroundColor Yellow
Write-Host "   GitHub Pages: https://mas-ai-official.github.io/NatureNLP/" -ForegroundColor Cyan
Write-Host "   Custom Domain: https://naturenlp.mas-ai.co" -ForegroundColor Cyan
Write-Host "   (Custom domain will work after DNS is configured)" -ForegroundColor Gray

# Next Steps
Write-Host "`n📝 Next Steps:" -ForegroundColor Cyan
Write-Host "--------------" -ForegroundColor Cyan
Write-Host "1. Enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "   → https://github.com/Mas-AI-Official/NatureNLP/settings/pages" -ForegroundColor White
Write-Host "   → Select: Branch 'main', Folder '/ (root)'" -ForegroundColor White
Write-Host "   → Click 'Save'" -ForegroundColor White

Write-Host "`n2. Configure DNS (if using custom domain):" -ForegroundColor Yellow
Write-Host "   → Add CNAME: naturenlp → mas-ai-official.github.io" -ForegroundColor White
Write-Host "   → See DNS_SETUP.md for detailed instructions" -ForegroundColor White

Write-Host "`n3. Verify in GitHub:" -ForegroundColor Yellow
Write-Host "   → Go to Settings → Pages" -ForegroundColor White
Write-Host "   → Enter custom domain: naturenlp.mas-ai.co" -ForegroundColor White
Write-Host "   → Wait for verification" -ForegroundColor White
Write-Host "   → Enable 'Enforce HTTPS'" -ForegroundColor White

Write-Host "`n✅ Setup complete! Your site will be live shortly." -ForegroundColor Green

