# Portfolio Updates - Favicon, Analytics & Social Meta Tags

## What's Been Added

### 1. Favicon Setup
- **Profile Image as Favicon**: Uses `/src/assets/Emon/emon_pp_BR.png` as the favicon
- Shows your profile picture in browser tabs and bookmarks
- Provides visual branding across all browser interactions

### 2. Social Media Meta Tags (Open Graph & Twitter)
When your portfolio link is shared on social platforms, it displays:

**Desktop/Mobile Previews:**
- **Image**: Your profile picture (emon_pp_BR.png)
- **Title**: "Sany Hasan Emon - Structural Engineer"
- **Description**: "Structural Engineering graduate from CUET with expertise in sustainable materials, computational mechanics, and innovative infrastructure solutions. Passionate about research and teaching."

**Works On:**
- Facebook / Messenger - Rich link preview card
- Instagram - Image card with description
- LinkedIn - Professional preview with all metadata
- WhatsApp - Thumbnail + title + description
- Twitter/X - Large image card (summary_large_image)

### 3. Google Analytics Setup (Placeholder)
Comprehensive event tracking is now configured to monitor:

**Tracked Events:**
- **Page Views**: Every page load
- **Link Clicks**: Every button/link click with element text and href
- **Form Submissions**: Contact form submissions with form ID
- **Scroll Depth**: Tracks 25%, 50%, 75%, 100% scroll milestones

**To Activate:**
1. Create Google Analytics property at [analytics.google.com](https://analytics.google.com/)
2. Get your **Measurement ID** (format: G-XXXXXXXXXX)
3. Replace `G-XXXXXXXXXX` in two places:
   - `index.html` line ~46
   - gtag config line in index.html
4. Deploy to Vercel
5. View real-time data in Google Analytics dashboard

See `ANALYTICS_SETUP.md` for detailed instructions.

## Files Modified

### index.html
- Added favicon link (PNG format)
- Added Open Graph meta tags for social sharing
- Added Twitter Card meta tags
- Added description and keywords meta tags
- Added Google Analytics script (placeholder)
- Updated page title to include "Structural Engineer"

### src/main.jsx
- Added Google Analytics event listeners for:
  - Page views on load
  - Click tracking on all buttons/links
  - Form submission tracking
  - Scroll depth tracking (25%, 50%, 75%, 100%)

### New File: ANALYTICS_SETUP.md
- Complete setup guide for Google Analytics
- Step-by-step Measurement ID setup
- Instructions for viewing tracked data
- Troubleshooting tips

## Testing Locally

1. Favicon appears in browser tab when you load the site
2. Open browser DevTools > Network tab to see gtag requests
3. Try clicking buttons/links and scrolling to verify events are captured

## Deployment Notes

- Meta tags are automatically parsed by social media crawlers
- Replace the placeholder Google Analytics ID before deploying to production
- Analytics data appears in Google Analytics dashboard within 24-48 hours of first deployment

## Social Sharing Preview

When someone shares your portfolio on social media, they'll see:
```
[Your Profile Picture]
Sany Hasan Emon - Structural Engineer
Structural Engineering graduate from CUET with expertise in sustainable materials, 
computational mechanics, and innovative infrastructure solutions...
```

Instead of just a generic link!
