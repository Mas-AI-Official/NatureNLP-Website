# NatureNLP Website

A production-ready, static, responsive website for NatureNLP — Efficiency-First NLP Research.

## Overview

NatureNLP is an efficiency-first NLP research prototype focused on reducing compute and energy costs while maintaining language performance. This website showcases the project's approach, architecture, and progress.

## Features

- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Glass morphism design with green/nature theme
- **Video Players**: Custom video player components for overview and technical videos
- **Pitch Deck**: Embedded PDF viewer with download option
- **Technical Documentation**: Architecture overview and nature-inspired principles
- **Timeline**: Progress updates from v3 to v6

## Project Structure

```
naturenlp-website/
├── index.html              # Home page
├── video.html              # Video page with 2 players
├── pitch-deck.html         # Pitch deck viewer
├── overview.html           # Technical overview
├── about.html              # About/Founder page
├── updates.html            # Progress timeline
├── assets/
│   ├── css/
│   │   └── video-player.css
│   ├── js/
│   │   ├── nature-hex-network.js
│   │   └── video-player.js
│   ├── img/                # Images (if needed)
│   └── video/              # Video files
│       ├── NatureNLP__Inspired_by_Nature -.mp4
│       └── NatureNLP__Training_AI - Explaination.mp4
├── pitch-deck/
│   └── NatureNLP_Green_AI_Training.pdf
├── scripts/
│   └── nav.js              # Navigation script
├── styles/
│   └── global.css          # Global styles with green theme
├── README.md
└── launch_site.ps1          # PowerShell launch script
```

## Running Locally

### Option 1: Using PowerShell Script (Recommended)

Run the provided PowerShell script:

```powershell
.\launch_site.ps1
```

This will:
- Start a local HTTP server on port 5173
- Open your browser to `http://localhost:5173`

### Option 2: Using Python

If Python is installed:

```bash
cd D:\Ideas\naturenlp-website
python -m http.server 5173
```

Then open `http://localhost:5173` in your browser.

### Option 3: Using Node.js (http-server)

If Node.js is installed:

```bash
npx http-server -p 5173
```

### Option 4: Direct File Opening

You can also open `index.html` directly in your browser, though some features (like video playback) may be limited due to CORS restrictions.

## Video Files

**Note:** Video files are not included in this repository due to GitHub's file size limits (videos exceed 50-100MB). 

To add videos:

1. Place your video files in `assets/video/` locally
2. The video paths in `video.html` are already configured for:
   - `NatureNLP__Inspired_by_Nature -.mp4` (Overview video)
   - `NatureNLP__Training_AI - Explaination.mp4` (Technical explanation)

**Options for hosting videos:**
- Use [Git LFS](https://git-lfs.github.com/) for version control
- Host videos on a CDN or cloud storage
- Use GitHub Releases for large files
- Host on YouTube/Vimeo and embed

The website will work locally once videos are placed in `assets/video/`.

## Replacing Pitch Deck

To replace the embedded pitch deck:

1. Place your PDF in `pitch-deck/`
2. Update the PDF path in `pitch-deck.html`:
   - `src="/pitch-deck/your-pdf-name.pdf"` in the iframe
   - `href="/pitch-deck/your-pdf-name.pdf"` in download links

The current pitch deck is:
- `NatureNLP_Green_AI_Training.pdf`

## Updating Transcripts

To add video transcripts:

1. Open `video.html`
2. Find the `<details>` sections with "View Transcript"
3. Replace the placeholder text with your actual transcript

## Design System

The website uses a green/nature theme with:

- **Primary Color**: `#4CAF50` (Green)
- **Accent Color**: `#66BB6A` (Light Green)
- **Background**: Dark green tones (`#0a1f0a`)
- **Glass Cards**: Semi-transparent with blur effects
- **Typography**: System fonts for performance

CSS variables are defined in `styles/global.css` for easy theming.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Performance

- No heavy frameworks (uses Tailwind CDN for utility classes)
- Vanilla JavaScript for interactivity
- Optimized CSS with minimal dependencies
- Lighthouse performance optimized

## License

© MAS-AI Technology Inc. All rights reserved.

## Contact

For questions or collaboration:
- Email: masoud.masoori@mas-ai.co
- GitHub: https://github.com/Masoud-Masoori
- LinkedIn: https://www.linkedin.com/in/masoud-masoori

