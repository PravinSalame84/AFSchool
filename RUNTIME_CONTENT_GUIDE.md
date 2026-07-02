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

- [src/data/siteConfig.js](/src/data/siteConfig.js)
- [src/context/RuntimeContentContext.jsx](/src/context/RuntimeContentContext.jsx)
- [src/hooks/useRuntimeContent.js](/src/hooks/useRuntimeContent.js)
- [src/data/runtimeContentFallback.js](/src/data/runtimeContentFallback.js)
- [google-apps-script/runtime-content.gs](/google-apps-script/runtime-content.gs)
- [runtime-content-template/README.md](/Users/aniketsatarkar/Downloads/airforceschool/runtime-content-template/README.md)

## Step 1: Create The Google Sheet

Create one Google Sheet with these tabs:

1. `site_status`
2. `announcement_actions`
3. `marquee`
4. `notices`
5. `events`
6. `downloads`

If you want a faster setup, use the ready-made CSV template files in:

- [runtime-content-template](/Users/aniketsatarkar/Downloads/airforceschool/runtime-content-template/README.md)

You can copy each CSV into its matching Google Sheet tab.

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

- [google-apps-script/runtime-content.gs](/google-apps-script/runtime-content.gs)

That script reads the sheet tabs and returns JSON for the website.

It also now supports Google Drive sharing links in the `downloads.href` column.
You can paste either:

```text
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

or:

```text
https://drive.google.com/open?id=FILE_ID
```

and the script will convert them into direct download links automatically.

## Step 4: Deploy As Web App

In Apps Script:

1. Click `Deploy`
2. Click `New deployment`
3. Choose `Web app`
4. Set `Execute as` to `Me`
5. Set `Who has access` to `Anyone`
6. Click `Deploy`
7. Copy the generated Web App URL

## Step 5: Connect The Website

Update [src/data/siteConfig.js](/src/data/siteConfig.js):

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

You can also keep [.env.example](/Users/aniketsatarkar/Downloads/airforceschool/.env.example) as the team reference file and only place the real URL in your local `.env`.

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

## Recommended First Test

Once deployment is done, use this short test checklist:

1. Open the Apps Script Web App URL in the browser.
2. Confirm raw JSON appears.
3. Add the same URL to `.env` as `VITE_RUNTIME_CONTENT_ENDPOINT`.
4. Run `npm run dev`.
5. Confirm the homepage marquee, notice board and downloads are showing runtime content.
6. Change one notice row in the sheet and refresh the site.
7. Change `site_status.mode` to `maintenance` and confirm the maintenance screen appears.

## Troubleshooting

If the website still shows local fallback content:

1. Confirm the Web App URL ends with `/exec`
2. Confirm the deployment access is `Anyone`
3. Confirm the tab names match exactly
4. Confirm `isPublished` values are `TRUE`
5. Restart the dev server after updating `.env`
6. Open browser devtools and check whether the runtime URL returns JSON

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

- [src/data/runtimeContentFallback.js](/src/data/runtimeContentFallback.js)

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

## ===========================================================================================
## ANOTHER GUIDE FOR YOU AS BELOW READ CAREFULLY
## ===========================================================================================
/**
## Your project is already mostly prepared for dynamic runtime content. You only need to set up the Google Sheet, Apps Script deployment, and connect the Web App URL.

## What’s Already Ready
These files are already wired for runtime content:
[google-apps-script/runtime-content.gs](/Users/aniketsatarkar/Downloads/airforceschool/google-apps-script/runtime-content.gs)
[src/context/RuntimeContentContext.jsx](/Users/aniketsatarkar/Downloads/airforceschool/src/context/RuntimeContentContext.jsx)
[src/data/runtimeContentFallback.js](/Users/aniketsatarkar/Downloads/airforceschool/src/data/runtimeContentFallback.js)
[RUNTIME_CONTENT_GUIDE.md](/Users/aniketsatarkar/Downloads/airforceschool/RUNTIME_CONTENT_GUIDE.md)

## Recommended Setup
Use:
Google Sheets for content
Google Apps Script to publish JSON
Google Drive for PDFs/files if needed
Step 1: Create A Google Sheet
Create one sheet with these tabs exactly:
site_status
announcement_actions
marquee
notices
events
downloads
Step 2: Add Headers Exactly
Use row 1 as headers.
site_status
mode | title | message | updatedAt | announcementMessage
announcement_actions
label | to | isPublished
marquee
text | isPublished
notices
title | category | date | to | excerpt | isPublished
events
title | date | to | isPublished
downloads
label | href | category | isPublished
Step 3: Add Sample Data
Example site_status
active | School Website Available | The website is currently serving published school content. | 01 Jul 2026 | Admissions open. Latest notices and downloads are available here.
Example announcement_actions
Notice Board | /notice-board | TRUE
Downloads | /downloads | TRUE
Admissions | /admissions | TRUE
Example marquee
Admissions open for Session 2026-27 | TRUE
Holiday homework PDFs available now | TRUE
Example notices
Class IX Unit Test Schedule | Notice | July 2026 | /notice-board | Updated class-wise schedule for the upcoming assessment cycle. | TRUE
Example events
Investiture Ceremony | July 2026 | /gallery | TRUE
Example downloads
Admission Form 2026-27 | https://your-file-url.pdf | Admission | TRUE
Step 4: Add PDFs From Google Drive
For downloadable files:
Upload the PDF to Google Drive
Open the file
Click Share
Change access to Anyone with the link
Copy the file link
Use a direct-style link in the href column like:
https://drive.google.com/uc?export=download&id=FILE_ID
If your shared URL looks like:
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
Then the FILE_ID is the part between /d/ and /view.
Step 5: Add Apps Script
Open your Google Sheet:
Extensions
Apps Script
Replace the default script with the content from:
[runtime-content.gs](/Users/aniketsatarkar/Downloads/airforceschool/google-apps-script/runtime-content.gs)
Step 6: Deploy As Web App
Inside Apps Script:
Click Deploy
Click New deployment
Select Web app
Set:Execute as: Me
Who has access: Anyone

Click Deploy
Copy the Web App URL
It will look something like:
https://script.google.com/macros/s/XXXXXXXXXXXX/exec
Step 7: Connect The Website
Best option: create a .env file in the project root.
Add:
VITE_RUNTIME_CONTENT_ENDPOINT=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
Your app already reads this from [src/data/siteConfig.js](/Users/aniketsatarkar/Downloads/airforceschool/src/data/siteConfig.js).
Step 8: Start The App
Run the site and verify the runtime content is loading:
npm run dev
Then check:
announcement bar
homepage marquee
notice board
downloads
events
Step 9: Test Maintenance Mode
In site_status, change:
mode = maintenance

The site should switch to maintenance mode automatically.
To restore normal site:
mode = active

Good Practice
Use TRUE in isPublished only for items you want live
Keep old rows but mark them FALSE
Use relative links like /downloads, /gallery, /notice-board for internal navigation
Use full https://... links only for PDFs or external pages

Simplest Real Workflow
Google Sheet manages text content
Google Drive stores PDFs
Apps Script converts sheet rows to JSON
Website fetches live content at runtime

If you want, I can do the next step with you and prepare:
a ready-to-fill sheet template,
sample row data for your school,
or a small improvement to runtime-content.gs so it also supports direct Google Drive file normalization automatically.

RUNTIME_CONTENT_GUIDE.mdDocument · MD
