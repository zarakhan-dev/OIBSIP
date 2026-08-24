# TempConvert — Temperature Converter

An interactive temperature converter that converts between Celsius, Fahrenheit, and Kelvin in real time. Built as part of the Oasis Infobyte Web Development Internship (Level 2).

## Live Preview

Open index.html in any browser to use the converter — no build step or server required.

## Tech Stack

- HTML5
- CSS3 (Flexbox + Grid, no frameworks)
- Vanilla JavaScript (no libraries)

## Features

- Convert a temperature entered in Celsius, Fahrenheit, or Kelvin into all three units at once
- Input validation for empty and non-numeric input
- Absolute-zero validation (rejects temperatures below -273.15°C / -459.67°F / 0K)
- Clear, styled error messages
- Results formatted to 2 decimal places
- "How It Works" section and a quick conversion-formula reference guide
- Dark-themed, fully responsive UI with subtle entrance and hover animations
- Typewriter-style animated heading (pure CSS, no JavaScript)

## How the Conversion Works

Every input value is first converted to Celsius internally, and Celsius is then converted into the other two units. This keeps the formula logic simple and avoids writing six separate conversion formulas.

## File Structure


WebDev-L2-TempConverter/
├── index.html
├── style.css
├── script.js
└── README.md


## How to Run

1. Download or clone this folder.
2. Open index.html directly in a web browser.

No dependencies, no installation required.

## Test Cases

| Input | Unit | Expected Output |
|---|---|---|
| 25 | Celsius | 25.00°C, 77.00°F, 298.15K |
| 32 | Fahrenheit | 0.00°C, 32.00°F, 273.15K |
| 273.15 | Kelvin | 0.00°C, 32.00°F, 273.15K |
| -300 | Celsius | Error: Temperature cannot be below absolute zero |
| (empty) | — | Error: Please enter a temperature |