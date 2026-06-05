# Google Analytics Setup Guide

## Overview
The portfolio is now configured to track user interactions including:
- Page views
- Button and link clicks
- Form submissions
- Scroll depth (25%, 50%, 75%, 100%)

## Setup Instructions

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create a new property for your portfolio

### Step 2: Get Your Tracking ID
After creating the property, you'll receive a **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Update the Tracking ID
Replace `G-XXXXXXXXXX` in two places:

**In `index.html`:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
<script>
  gtag('config', 'G-YOUR-ID-HERE');
</script>
```

**In `src/main.jsx`:**
No changes needed - it uses the gtag object initialized in index.html

### Step 4: Deploy
Once you deploy to Vercel, Google Analytics will start tracking immediately.

## Tracked Events

### 1. **Page Views**
- Automatically tracked when the page loads
- Shows in: Engagement > Pages and screens

### 2. **Clicks**
- Tracks all button and link clicks
- Includes: text content, element type, href
- Shows in: Events > click

### 3. **Form Submissions**
- Tracks contact form submissions
- Shows in: Events > form_submit

### 4. **Scroll Depth**
- Tracks when users reach 25%, 50%, 75%, 100% of page
- Shows in: Events > scroll_depth

## Viewing Analytics

1. Go to Google Analytics dashboard
2. Click on your property
3. Navigate to:
   - **Realtime** → See live visitor activity
   - **Engagement** → View page views, events, user interactions
   - **Events** → See all tracked custom events
   - **Users** → View visitor demographics and behavior

## Sharing on Social Media

### Meta Tags Added
- **Open Graph**: Displays title, description, and profile image on Facebook, LinkedIn, WhatsApp
- **Twitter Card**: Optimized for Twitter/X sharing
- **Favicon**: Shows your profile picture as the site icon

When the link is shared on:
- **Facebook/Messenger**: Shows profile image, name, and description
- **Instagram**: Shows preview card with image
- **LinkedIn**: Professional preview with all details
- **WhatsApp**: Shows favicon and description
- **Twitter/X**: Large image card with title

No additional setup needed - these are automatic based on meta tags!

## Best Practices

1. **Check Realtime Data**: After deployment, verify tracking is working in Realtime view
2. **Test Events**: Click around the site and check if events appear in Google Analytics
3. **Set Up Goals**: Create conversion goals in GA for important actions (like contact form submission)
4. **Monitor Metrics**: Regularly check engagement, scroll depth, and user behavior

## Troubleshooting

- **No data appearing?** Wait 24-48 hours after first deployment - GA takes time to process data
- **Events not tracking?** Check browser console for errors, verify Measurement ID is correct
- **Blocked by ad-blocker?** GA is sometimes blocked - check with different browser/device
