const form = document.getElementById("converter-form");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const errorMessage = document.getElementById("error-message");
const resultsBox = document.getElementById("results");

const resultCelsius = document.getElementById("result-celsius");
const resultFahrenheit = document.getElementById("result-fahrenheit");
const resultKelvin = document.getElementById("result-kelvin");

const ABSOLUTE_ZERO = {
  celsius: -273.15,
  fahrenheit: -459.67,
  kelvin: 0,
};

function toCelsius(value, unit) {
  if (unit === "celsius") return value;
  if (unit === "fahrenheit") return (value - 32) * (5 / 9);
  if (unit === "kelvin") return value - 273.15;
}

function convertTemperature(value, unit) {
  const celsius = toCelsius(value, unit);
  const fahrenheit = celsius * (9 / 5) + 32;
  const kelvin = celsius + 273.15;
  return { celsius, fahrenheit, kelvin };
}

function validateInput(rawValue, unit) {
  if (rawValue.trim() === "") {
    return "Please enter a temperature.";
  }

  const value = Number(rawValue);

  if (Number.isNaN(value)) {
    return "Please enter a valid number.";
  }

  if (value < ABSOLUTE_ZERO[unit]) {
    return "Temperature cannot be below absolute zero.";
  }

  return null;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  resultsBox.hidden = true;

  errorMessage.classList.remove("error-message--shake");
  void errorMessage.offsetWidth;
  errorMessage.classList.add("error-message--shake");
}

function clearError() {
  errorMessage.hidden = true;
  errorMessage.textContent = "";
}

function displayResults(results) {
  resultCelsius.textContent = results.celsius.toFixed(2) + " °C";
  resultFahrenheit.textContent = results.fahrenheit.toFixed(2) + " °F";
  resultKelvin.textContent = results.kelvin.toFixed(2) + " K";
  resultsBox.hidden = false;

  const cards = document.querySelectorAll(".result-card");
  cards.forEach((card) => {
    card.classList.remove("result-card--animate");
    void card.offsetWidth;
    card.classList.add("result-card--animate");
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const rawValue = temperatureInput.value;
  const unit = unitSelect.value;
  const errorText = validateInput(rawValue, unit);

  if (errorText) {
    showError(errorText);
    return;
  }

  clearError();

  const value = Number(rawValue);
  const results = convertTemperature(value, unit);
  displayResults(results);
});