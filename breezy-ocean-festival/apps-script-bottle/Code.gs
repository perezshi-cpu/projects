// Code.gs — Apps Script Web App backing the MATAN'A "bottle message" lookup.
// Bound to a dedicated Google Sheet (separate from the carpool spreadsheet)
// with exactly two columns: name (A) and phone (B). The site calls this via
// a GET request with a ?phone= query param and gets back the matching
// guest's name, or a "not found" result.
//
// Read-only: this script never writes to the sheet. The sheet owner enters
// rows by hand in the Sheets UI. See README.md for setup steps and two
// deployment gotchas that caused real bugs on the carpool feature.

var TAIL_LENGTH = 9;

// Guests' numbers include various country codes (Israeli, US, Australian,
// Portuguese, ...) stored without a leading "+", and Sheets may store a
// phone as a Number if the column isn't formatted as Plain Text. Rather
// than parsing every country's format, we compare only the last 9 digits
// of whatever's left after stripping non-digit characters — adding or
// omitting a country-code prefix doesn't change the trailing digits.
function phoneTail_(raw) {
  var digits = String(raw).replace(/\D/g, '');
  return digits.slice(-TAIL_LENGTH);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// GET requests with only a query string (no custom headers, no
// Content-Type) are a CORS "simple request" — no preflight OPTIONS is
// sent, so this doesn't need the Content-Type workaround the carpool
// feature's doPost() needs.
function doGet(e) {
  try {
    var rawPhone = e && e.parameter && e.parameter.phone;
    if (!rawPhone) {
      return jsonResponse_({ ok: false, error: 'Missing phone parameter' });
    }

    var target = phoneTail_(rawPhone);
    if (target.length < TAIL_LENGTH) {
      return jsonResponse_({ ok: false, error: 'Invalid phone number' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var lastRow = sheet.getLastRow();
    if (lastRow < 1) {
      return jsonResponse_({ ok: true, found: false });
    }

    // Column A: name, Column B: phone. A header row (e.g. "name" / "phone")
    // is harmless — its phone cell normalizes to a short/empty string that
    // never matches a real 9-digit target.
    var values = sheet.getRange(1, 1, lastRow, 2).getValues();

    for (var i = 0; i < values.length; i++) {
      var rowPhone = phoneTail_(values[i][1]);
      if (rowPhone.length === TAIL_LENGTH && rowPhone === target) {
        var name = String(values[i][0] || '').trim();
        return jsonResponse_({ ok: true, found: true, name: name });
      }
    }

    return jsonResponse_({ ok: true, found: false });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}
