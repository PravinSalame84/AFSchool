# Runtime Content Guide

This website now supports **DYNAMIC CONTENTS** without rebuilding every time.

You can update these sections live:

- announcement bar
- homepage marquee
- notice board
- events
- downloads / PDFs
- results PDFs
- timetable PDFs
- admission alerts
- maintenance mode

The recommended setup is:

1. Maintain content in `Google Sheets`
2. Publish JSON through `Google Apps Script`
3. Paste that Web App URL into the website config

The site will then fetch live content at runtime and still fall back to local content if the feed is unavailable.

## Files Already Prepared

- [src/data/siteConfig.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/siteConfig.js)
- [src/context/RuntimeContentContext.jsx](/Users/aniketsatarkar/Downloads/brightland-edu/src/context/RuntimeContentContext.jsx)
- [src/hooks/useRuntimeContent.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/hooks/useRuntimeContent.js)
- [src/data/runtimeContentFallback.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/runtimeContentFallback.js)
- [google-apps-script/runtime-content.gs](/Users/aniketsatarkar/Downloads/brightland-edu/google-apps-script/runtime-content.gs)

## Step 1: Create The Google Sheet

Create one Google Sheet with these tabs:

1. `site_status`
2. `announcement_actions`
3. `marquee`
4. `notices`
5. `events`
6. `downloads`

## Step 2: Add Columns In Each Tab

### `site_status`

Use exactly these headers in row 1:

```text
mode | title | message | updatedAt | announcementMessage
```

Example row:

```text
active | School Website Available | The website is currently serving published school content. | 27 Jun 2026 | Admissions open. Latest notices and downloads are available here.
```

For maintenance mode:

```text
maintenance | Scheduled Website Update | Notices and downloads are being refreshed. Please check back shortly. | 27 Jun 2026 08:30 PM | Website maintenance in progress.
```

### `announcement_actions`

Headers:

```text
label | to | isPublished
```

Example:

```text
Notice Board | /notice-board | TRUE
Downloads | /downloads | TRUE
Admissions | /admissions | TRUE
```

### `marquee`

Headers:

```text
text | isPublished
```

Example:

```text
Admissions open for Session 2026-27 | TRUE
Unit test timetable uploaded | TRUE
Holiday homework PDFs available now | TRUE
```

### `notices`

Headers:

```text
title | category | date | to | excerpt | isPublished
```

Example:

```text
Class IX Unit Test Schedule | Notice | July 2026 | /notice-board | Updated class-wise schedule for the upcoming assessment cycle. | TRUE
Result Declaration - Primary Wing | Result | July 2026 | /downloads | Result PDF is now available in the download centre. | TRUE
```

### `events`

Headers:

```text
title | date | to | isPublished
```

Example:

```text
Investiture Ceremony | July 2026 | /gallery | TRUE
Annual Sports Meet | August 2026 | /gallery | TRUE
```

### `downloads`

Headers:

```text
label | href | category | isPublished
```

Example:

```text
Class IX Timetable | https://your-file-url.pdf | Timetable | TRUE
Primary Wing Results | https://your-file-url.pdf | Result | TRUE
Admission Form 2026-27 | https://your-file-url.pdf | Admission | TRUE
```

## Step 3: Add The Apps Script

Open `Extensions -> Apps Script` from the Google Sheet.

Replace the default script with the contents of:

- [google-apps-script/runtime-content.gs](/Users/aniketsatarkar/Downloads/brightland-edu/google-apps-script/runtime-content.gs)

That script reads the sheet tabs and returns JSON for the website.

## Step 4: Deploy As Web App

In Apps Script:

1. Click `Deploy`
2. Click `New deployment`
3. Choose `Web app`
4. Set access so the website can read it
5. Copy the generated Web App URL

## Step 5: Connect The Website

Update [src/data/siteConfig.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/siteConfig.js):

```js
runtimeContent: {
  endpoint: import.meta.env.VITE_RUNTIME_CONTENT_ENDPOINT || '',
  revalidateMs: 5 * 60 * 1000,
  storageKey: 'afs-runtime-content-cache-v1',
}
```

### Option A: Hardcode The URL

For quick setup:

```js
endpoint: 'https://script.google.com/macros/s/your-web-app-id/exec',
```

### Option B: Use Environment Variable

Create `.env`:

```env
VITE_RUNTIME_CONTENT_ENDPOINT=https://script.google.com/macros/s/your-web-app-id/exec
```

This is cleaner for deployment.

## JSON Shape Returned To The Website

The runtime endpoint should return this structure:

```json
{
  "siteStatus": {
    "mode": "active",
    "title": "School Website Available",
    "message": "The website is currently serving published school content.",
    "updatedAt": "27 Jun 2026"
  },
  "announcementBar": {
    "message": "Admissions open. Latest notices and downloads are available here.",
    "actions": [
      { "label": "Notice Board", "to": "/notice-board" },
      { "label": "Downloads", "to": "/downloads" }
    ]
  },
  "marquee": [
    "Admissions open for Session 2026-27",
    "Holiday homework PDFs available now"
  ],
  "notices": [
    {
      "title": "Result Declaration - Primary Wing",
      "category": "Result",
      "date": "July 2026",
      "to": "/downloads",
      "excerpt": "Result PDF is now available in the download centre."
    }
  ],
  "events": [
    {
      "title": "Investiture Ceremony",
      "date": "July 2026",
      "to": "/gallery"
    }
  ],
  "downloads": [
    {
      "label": "Primary Wing Results",
      "href": "https://your-file-url.pdf",
      "category": "Result"
    }
  ]
}
```

## How Maintenance Mode Works

If the `site_status` row contains:

```text
mode = maintenance
```

the website automatically shows the maintenance screen instead of normal pages.

This is useful during:

- timetable/result reshuffling
- admission-season updates
- large PDF replacement
- page migration
- temporary site issues

Switch it back to:

```text
mode = active
```

to restore the full website.

## Local Fallback Safety

If the runtime endpoint is:

- unavailable
- invalid
- temporarily broken
- slow

the site automatically falls back to:

- [src/data/runtimeContentFallback.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/runtimeContentFallback.js)

So the website still loads instead of breaking.

## Where Dynamic Content Appears

Currently connected areas:

- top announcement bar
- homepage marquee
- homepage notices block
- homepage downloads block
- notice board page
- downloads page
- maintenance mode screen

## Good Content Mapping

Use these categories for clarity:

- `Notice`
- `Event`
- `Result`
- `Timetable`
- `Admission`
- `Circular`
- `Holiday Homework`
- `Calendar`

## Recommended Upload Strategy For PDFs

Store PDFs in a reliable public location, then place the public file URL in the `downloads.href` column.

You can use:

- Google Drive public file links
- Cloudflare R2 public links
- your hosting `/downloads/...` links

## Testing Checklist

After connecting the endpoint:

1. open homepage and confirm marquee updates
2. open notice board and confirm live notices appear
3. open downloads and confirm PDF links work
4. switch `mode` to `maintenance` and verify maintenance screen
5. switch back to `active`
6. verify mobile layout still looks correct

## Notes For Future Updates

- The site fetches runtime content once and shares it across pages
- Cached content is reused temporarily for speed
- Local fallback prevents white-screen failures
- You can extend the same JSON later for gallery, alumni, careers or staff notices
