document.addEventListener('keydown', eventHandler);
document.addEventListener('keypress', eventHandler);

var codeToIso = {
  "Backquote":"E00", "Digit1":"E01", "Digit2":"E02", "Digit3":"E03", "Digit4":"E04", "Digit5":"E05", "Digit6":"E06", "Digit7":"E07", "Digit8":"E08", "Digit9":"E09", "Digit0":"E10", "Minus":"E11", "Equal":"E12",
  "KeyQ":"D01", "KeyW":"D02", "KeyE":"D03", "KeyR":"D04", "KeyT":"D05", "KeyY":"D06", "KeyU":"D07", "KeyI":"D08", "KeyO":"D09", "KeyP":"D10", "BracketLeft":"D11", "BracketRight":"D12",
  "KeyA":"C01", "KeyS":"C02", "KeyD":"C03", "KeyF":"C04", "KeyG":"C05", "KeyH":"C06", "KeyJ":"C07", "KeyK":"C08", "KeyL":"C09", "Semicolon":"C10", "Quote":"C11", "Backslash":"C12",
  "IntlBackslash":"B00", "KeyZ":"B01", "KeyX":"B02", "KeyC":"B03", "KeyV":"B04", "KeyB":"B05", "KeyN":"B06", "KeyM":"B07", "Comma":"B08", "Period":"B09", "Slash":"B10", "IntlRo":"B11"
};

function eventHandler(event) {
  event.iso = codeToIso[event.code];
}
