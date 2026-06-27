# Runtime Content Guide

This site now supports a lightweight runtime content feed for:

- `announcementBar`
- `marquee`
- `notices`
- `events`
- `downloads`

## Where To Configure

Update the `endpoint` value in [src/data/siteConfig.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/siteConfig.js):

```js
runtimeContent: {
  endpoint: 'https://script.google.com/macros/s/your-web-app-id/exec',
  revalidateMs: 5 * 60 * 1000,
  storageKey: 'afs-runtime-content-cache-v1',
}
```

If `endpoint` is blank, the site automatically uses local fallback content from:

- [src/data/runtimeContentFallback.js](/Users/aniketsatarkar/Downloads/brightland-edu/src/data/runtimeContentFallback.js)

## Expected JSON Shape

```json
{
  "announcementBar": {
    "message": "Admissions open for Session 2026-27.",
    "actions": [
      { "label": "Admission Update", "to": "/admissions" },
      { "label": "Notice Board", "to": "/notice-board" }
    ]
  },
  "marquee": [
    "New timetable published",
    "Unit test schedule available",
    "Admissions enquiry open"
  ],
  "notices": [
    {
      "title": "Unit Test Schedule 2026",
      "category": "Notice",
      "date": "June 2026",
      "to": "/notice-board",
      "excerpt": "Updated class-wise schedule for the upcoming assessment cycle."
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
      "label": "Class IX Timetable",
      "href": "https://example.com/files/class-9-timetable.pdf",
      "category": "Timetable"
    }
  ]
}
```

## Best Low-Maintenance Setup

For a low-budget workflow:

1. Maintain content in `Google Sheets`
2. Publish it through `Google Apps Script` as JSON
3. Paste that public web app URL into `siteConfig.runtimeContent.endpoint`

This gives you lightweight dynamic updates without rebuilding the site every time.
