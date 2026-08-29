# Bottle Message Apps Script deployment

This is a **separate** deployment from the carpool feature's Apps Script —
it uses its own new Google Sheet and its own `/exec` URL. Don't reuse the
carpool spreadsheet or its script.

## 1. The Google Sheet

Uses the spreadsheet with exactly two columns:

- **Column A**: name
- **Column B**: phone

One row per guest, e.g.:

| name    | phone       |
|---------|-------------|
| ARAD.R  | 18082775147 |

A header row in row 1 is fine — the script safely ignores it.

Guests' phone numbers include a mix of country codes (Israeli, US,
Australian, etc.) without a leading `+`. The lookup code doesn't try to
parse each country's format — it compares only the **last 9 digits** of
whatever's typed against the last 9 digits of each row's phone column, so
it matches regardless of country code or exact formatting on either side.
No special column formatting is required for this to work, though
formatting column B as Plain Text (**Format → Number → Plain text**) is
still good practice to stop Sheets from reformatting long numbers on its
own.

## 2. Open the Apps Script editor

In the Sheet: **Extensions → Apps Script**.

## 3. Paste the code

**Delete the entire default `function myFunction() { ... }` stub first —
do not paste the code inside it.** Paste starting directly with the full
contents of [`Code.gs`](./Code.gs) from this folder, so `doGet` is a
top-level function. Pasting inside the default stub breaks routing. Save
(Ctrl/Cmd+S).

## 4. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. The first time, authorize the script through the consent screens
   (click **Advanced → Go to (project name)** if you see an "unverified
   app" warning — this is expected for your own script).
6. Copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 5. Wire the URL into the site

Paste that URL into `BOTTLE_API_URL` in `src/lib/bottle.ts`, replacing the
placeholder value.

## 6. Sanity check

Open `YOUR_URL/exec?phone=0500000000` directly in a browser tab. With no
matching row you should see:

```json
{"ok":true,"found":false}
```

Then try it with one of the real phone numbers already in the sheet (or
just its last 9 digits), and you should see:

```json
{"ok":true,"found":true,"name":"ARAD.R"}
```

## Important: redeploying after code changes

If you ever edit `Code.gs` again, the live `/exec` URL will **not**
automatically pick up the change. You need to go to **Deploy → Manage
deployments → (pencil/edit icon) → Version: New version → Deploy** to
publish the update to the same URL. Just saving the file in the editor is
not enough.
