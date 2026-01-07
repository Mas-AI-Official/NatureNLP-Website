# NatureNLP Website Launch Script
# Starts a local HTTP server and opens the browser

Write-Host "🌿 Starting NatureNLP Website..." -ForegroundColor Green

# Check if Python is available
$pythonAvailable = $false
try {
    $pythonVersion = python --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        $pythonAvailable = $true
        Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
    }
} catch {
    $pythonAvailable = $false
}

# Port to use
$port = 5173
$url = "http://localhost:$port"

if ($pythonAvailable) {
    Write-Host "`nStarting Python HTTP server on port $port..." -ForegroundColor Cyan
    Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Yellow
    
    # Start server in background
    Start-Process python -ArgumentList "-m", "http.server", $port -WindowStyle Hidden
    
    # Wait a moment for server to start
    Start-Sleep -Seconds 2
    
    # Open browser
    Write-Host "Opening browser to $url..." -ForegroundColor Cyan
    Start-Process $url
    
    Write-Host "`n✓ Server started! Website is available at: $url" -ForegroundColor Green
    Write-Host "To stop the server, close this window or press Ctrl+C`n" -ForegroundColor Yellow
    
    # Keep script running
    Write-Host "Server is running. Press Ctrl+C to stop..." -ForegroundColor Cyan
    try {
        while ($true) {
            Start-Sleep -Seconds 1
        }
    } catch {
        Write-Host "`nStopping server..." -ForegroundColor Yellow
        Get-Process python -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*http.server*" } | Stop-Process -Force
    }
} else {
    Write-Host "`n⚠ Python not found. Please install Python or use one of these alternatives:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1: Install Python from https://www.python.org/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Option 2: Use Node.js http-server:" -ForegroundColor Cyan
    Write-Host "  npx http-server -p $port" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 3: Use PHP (if installed):" -ForegroundColor Cyan
    Write-Host "  php -S localhost:$port" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 4: Open index.html directly in your browser" -ForegroundColor Cyan
    Write-Host "  (Note: Some features may not work due to CORS restrictions)" -ForegroundColor Yellow
    Write-Host ""
    
    # Ask if user wants to open index.html anyway
    $response = Read-Host "Would you like to open index.html directly? (y/n)"
    if ($response -eq 'y' -or $response -eq 'Y') {
        $indexPath = Join-Path $PSScriptRoot "index.html"
        if (Test-Path $indexPath) {
            Start-Process $indexPath
            Write-Host "`n✓ Opened index.html in your default browser" -ForegroundColor Green
        } else {
            Write-Host "`n✗ index.html not found in current directory" -ForegroundColor Red
        }
    }
}

