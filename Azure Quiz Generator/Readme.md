# Azure AI Quiz Generator

A beginner-friendly Next.js web app that generates a simple Azure AI practice quiz.

The app is intentionally small. It does not use a database, login system, backend API, or spreadsheet parser yet. The starter questions live in one JavaScript data file so the project is easy to understand.

## How To Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```text
http://localhost:3000
```

## Project Structure

```text
Azure Quiz Generator/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   └── QuizApp.jsx
├── lib/
│   └── studyGuides.js
├── Data/
│   └── Azure study guide 1.0.xlsx
├── Agents.md
├── Readme.md
├── package.json
└── .gitignore
```

## File Guide

### `package.json`

Defines the Next.js project. It lists the app scripts:

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build.

### `.gitignore`

Tells Git to ignore generated folders and local files, such as `node_modules/`, `.next/`, and `.env.local`.

### `app/layout.js`

The root layout for the Next.js app. It loads the global CSS file and wraps every page in the basic HTML structure.

### `app/page.js`

The home page. It imports and displays the quiz application component.

### `app/globals.css`

All visual styling for the app. It controls the page layout, buttons, quiz cards, answer choices, score metrics, and review screen.

### `components/QuizApp.jsx`

The main interactive quiz component. It handles:

- Selecting a certification study guide.
- Generating a randomized quiz.
- Moving to the next or previous question.
- Saving selected answers.
- Calculating the score.
- Showing explanations.
- Showing weak-topic recommendations.

### `lib/studyGuides.js`

The quiz data source. It contains the starter Azure AI study guide, questions, answer choices, correct answers, explanations, and recommendations.

To add another certification guide, add another object to the `studyGuides` array.

### `Data/Azure study guide 1.0.xlsx`

The original spreadsheet study guide. The current simple version does not parse it automatically yet.

### `Agents.md`

Project instructions for transforming Microsoft Learn content into structured quiz and study-guide data.

### `index.html`

The earlier static prototype. The Next.js app now lives in the `app/`, `components/`, and `data/` folders.

## Current Features

- Generates a randomized quiz.
- Shows one question at a time.
- Supports Previous and Next navigation.
- Labels answers A-D.
- Shows final score and percentage.
- Shows correct answers and explanations.
- Shows weak-topic recommendations.
- Supports multiple study guides in the data structure.

## Next Simple Improvement

The next useful step is to convert the Excel spreadsheet into rows inside `lib/studyGuides.js`, or add a small import tool later.
