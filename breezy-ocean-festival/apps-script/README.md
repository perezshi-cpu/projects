# Carpool Apps Script deployment

This site has no backend of its own — the carpool form and ride board work by
calling a small Google Apps Script "Web App" that reads and writes to your
existing carpool Google Sheet. You need to deploy this yourself once (a few
minutes), then paste the resulting URL into the site's code.

## 1. Open (or create) the target Google Sheet

Use the same spreadsheet you were already using for carpool, or any sheet you
control. The script will automatically create a `Carpool` tab inside it the
first time someone submits — you don't need to set up any columns by hand.

## 2. Open the Apps Script editor

In the Sheet: **Extensions → Apps Script**.

## 3. Paste the code

Delete whatever's in the default `Code.gs` file and paste in the full
contents of [`Code.gs`](./Code.gs) from this folder. Save (Ctrl/Cmd+S).

## 4. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. The first time, Google will ask you to authorize the script — click
   through the consent screens (you'll likely see an "unverified app"
   warning since this is your own personal script; click **Advanced → Go to
   (project name)** to proceed).
6. Copy the **Web app URL** shown after deployment. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 5. Wire the URL into the site

Paste that URL into `CARPOOL_API_URL` in `src/lib/carpool.ts`, replacing the
placeholder value.

## 6. Sanity check

Open the `/exec` URL directly in a browser tab. You should see raw JSON like:

```json
{"ok":true,"entries":[]}
```

That confirms the script is live and readable. Submitting the form on the
site should then add a row to the `Carpool` tab, and the ride board should
show it.

## Important: redeploying after code changes

If you ever edit `Code.gs` again, the live `/exec` URL will **not**
automatically pick up the change. You need to go to **Deploy → Manage
deployments → (pencil/edit icon) → New version → Deploy** to publish the
update to the same URL.
