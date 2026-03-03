# Chrono UI

A premium, dual-mode clock application featuring both analog and digital displays in a clean, responsive, and glassmorphic interface. Designed for precision, simplicity, and real-time synchronization.

## Features

- **Dual Modes**: Seamlessly switch between a classic Analog sweep and a precision Digital neon matrix display.
- **Premium Design**: Modern aesthetic with glassmorphic panels, gradient accents, and subtle micro-animations.
- **Responsive Navigation**: Easily accessible modes from a beautifully crafted, responsive landing page.
- **Real-Time Accuracy**: Built with minimal JavaScript for precise timekeeping and smooth UI updates.

## Tech Stack

- HTML5
- CSS3 (Powered by Tailwind CSS v4 via CLI)
- Vanilla JavaScript

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Install dependencies** (to get Tailwind CSS CLI):
   ```bash
   npm install
   ```

2. **Run the development watcher**:
   This will start the Tailwind CLI in watch mode, compiling `src/css/input.css` into `css/style.css` whenever you make changes.
   ```bash
   npm run dev
   ```

### Running the App

To view the application, you can simply open the `index.html` file in your web browser:

1. Navigate to the project root folder.
2. Double-click `index.html` or drag it into your browser.
 *(Recommended: Use an extension like **Live Server** in VS Code for live reloading during development).*

## Building for Production

When you are ready to deploy, compile a minified, production-ready version of the CSS:
```bash
npm run build
```

## Project Structure

- `index.html`: The main landing page and navigation hub.
- `analog.html`: The analog clock interface.
- `digital.html`: The digital clock interface.
- `src/`: Source files containing Tailwind input (`src/css/input.css`) and JavaScript logic (`src/js/`).
- `css/`: Output directory for the compiled Tailwind stylesheet (`css/style.css`).
