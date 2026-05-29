const display = document.getElementById("display");

// Add value to screen
function appendValue(value) {
  display.value += value;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

/* ====================
   KEYBOARD SUPPORT
==================== */

document.addEventListener("keydown", (e) => {

  const key = e.key;

  // Numbers and operators
  if (
    "0123456789+-*/.".includes(key)
  ) {
    appendValue(key);
  }

  // Enter = calculate
  else if (key === "Enter") {
    calculate();
  }

  // Backspace
  else if (key === "Backspace") {
    deleteLast();
  }

  // Escape = clear
  else if (key === "Escape") {
    clearDisplay();
  }
});