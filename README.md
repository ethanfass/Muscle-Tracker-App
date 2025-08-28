# Muscle Tracker App

A React application for planning workouts and visualizing muscle group training volume on a body diagram. Users can select exercises, see per-muscle totals, save and load workouts, switch between dark and light mode, and view general set-volume recommendations.

---

## Features

- Search and select exercises from a predefined list  
- Automatically calculate training volume per muscle group  
- Interactive body diagram with color-coded muscle activation  
- Save and load named workouts within the session  
- Dark mode toggle  
- Guidance on recommended sets per workout  
- Option to show all muscles or only active muscles  

---

## How It Works

- Each exercise maps to one or more muscle groups with weighted contributions  
  *(e.g., Bench Press → chest: 1, delts: 0.25, triceps: 0.25)*  
- The app aggregates weights for all selected exercises to produce per-muscle totals  
- The body diagram uses a gradient scale to represent volume intensity  
- Saved workouts are stored in component state (not persistent across refresh)  

---

## Technology

- React (Hooks and state management)  
- SVG overlays for the muscle diagram  
- CSS for layout and styling  

---

## Project Structure

```text
src/
  App.js              # main component logic
  App.css             # styles
  2body.JPG           # body diagram background image
  index.js            # React entry point
  index.css           # base styles
  reportWebVitals.js  # performance reporting

public/
  index.html          # HTML template
  favicon.ico         # app icon
  manifest.json       # PWA settings
  robots.txt          # web crawler rules
