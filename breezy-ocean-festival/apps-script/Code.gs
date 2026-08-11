// Code.gs — Apps Script Web App backing the MATAN'A carpool feature.
// Bound to the festival's Google Sheet. Deploy as a Web App
// (Execute as: Me, Who has access: Anyone). See README.md for setup steps.
//
// This site is fully static (no server), so this Web App is the only
// place data is written or read from. It creates its own "Carpool" tab
// in the bound spreadsheet the first time it runs — no manual sheet
// setup required.

const SHEET_NAME = 'Carpool';
const HEADERS = ['Timestamp', 'ID', 'Type', 'Name', 'Phone', 'City', 'Seats', 'Passengers', 'DepartureTime'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  // Force Name/Phone/City/DepartureTime columns to plain text. Without this,
  // Sheets auto-detects numeric-looking strings (e.g. a phone number) and
  // stores them as actual numbers, silently dropping a leading "0" — and
  // would do the same to a bare "18:00" departure time by reading it as a
  // time value. Applied to the whole column so it also covers future rows.
  sheet.getRange('D:F').setNumberFormat('@');
  sheet.getRange('I:I').setNumberFormat('@');
  return sheet;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// IMPORTANT: the site deliberately POSTs without a Content-Type header
// (see src/lib/carpool.ts) so the browser sends text/plain and avoids a
// CORS preflight OPTIONS request, which Apps Script Web Apps don't handle.
// Because of that, e.postData.type here will be "text/plain" even though
// the body is JSON — we parse it manually regardless of the declared type.
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'Missing request body' });
    }

    const data = JSON.parse(e.postData.contents);
    const type = data.type === 'driver' ? 'driver' : data.type === 'passenger' ? 'passenger' : null;
    const name = (data.name || '').toString().trim();
    const phone = (data.phone || '').toString().trim();
    const city = (data.city || '').toString().trim();

    if (!type || !name || !phone || !city) {
      return jsonResponse_({ ok: false, error: 'Missing required fields' });
    }

    let seats = '';
    let passengers = '';
    let departureTime = '';

    if (type === 'driver') {
      seats = Number(data.seats);
      if (!Number.isInteger(seats) || seats < 1 || seats > 5) {
        return jsonResponse_({ ok: false, error: 'Invalid seats value' });
      }
      departureTime = (data.departureTime || '').toString().trim();
      if (!departureTime) {
        return jsonResponse_({ ok: false, error: 'Missing departure time' });
      }
    } else {
      passengers = Number(data.passengers);
      if (!Number.isInteger(passengers) || passengers < 1 || passengers > 4) {
        return jsonResponse_({ ok: false, error: 'Invalid passengers value' });
      }
    }

    const id = Utilities.getUuid();
    const timestamp = new Date().toISOString();

    const sheet = getSheet_();
    const row = sheet.getLastRow() + 1;
    // Force plain-text format on this exact row's text-prone cells
    // (Name/Phone/City/DepartureTime) immediately before writing them.
    // A column-wide format set once in getSheet_() isn't reliably enough to
    // stop Sheets' automatic number/time detection on values written via
    // appendRow — setting the format on the specific target cells right
    // before the write is the pattern that actually sticks.
    sheet.getRange(row, 4, 1, 3).setNumberFormat('@'); // D:F = Name, Phone, City
    sheet.getRange(row, 9, 1, 1).setNumberFormat('@'); // I = DepartureTime
    sheet.getRange(row, 1, 1, HEADERS.length).setValues([
      [timestamp, id, type, name, phone, city, seats, passengers, departureTime],
    ]);

    return jsonResponse_({ ok: true, id: id });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    const sheet = getSheet_();
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return jsonResponse_({ ok: true, entries: [] });
    }

    const numRows = lastRow - 1;
    const values = sheet.getRange(2, 1, numRows, HEADERS.length).getValues();

    const entries = values.map(function (row) {
      return {
        timestamp: row[0] instanceof Date ? row[0].toISOString() : String(row[0]),
        id: String(row[1]),
        type: String(row[2]),
        name: String(row[3]),
        phone: String(row[4]),
        city: String(row[5]),
        seats: row[6] === '' ? null : Number(row[6]),
        passengers: row[7] === '' ? null : Number(row[7]),
        departureTime: row[8] === '' ? null : String(row[8]),
      };
    });

    entries.sort(function (a, b) {
      return a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0;
    });

    return jsonResponse_({ ok: true, entries: entries });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}
