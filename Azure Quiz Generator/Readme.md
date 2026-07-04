# Azure AI Quiz Generator

## Overview

The Azure AI Quiz Generator is a learning application that creates Microsoft Azure AI certification-style practice exams from study materials stored in Google Sheets or Excel spreadsheets.

The goal is to help learners prepare for certifications such as AI-900 and AI-102 by generating randomized, high-quality multiple-choice questions, automatically scoring exams, and identifying areas that need further study.

---

## Project Goals

* Read study materials from a spreadsheet.
* Generate randomized certification-style quizzes.
* Avoid repeating the same questions whenever possible.
* Automatically score completed exams.
* Provide explanations for correct answers.
* Track weak topics and recommend areas for review.
* Keep the application simple, maintainable, and easy for beginners to understand.

---

## Project Structure

```text
Azure Quiz Generator/

├── CLAUDE.md          # AI project instructions
├── README.md          # Project documentation

├── data/              # Study guides (.xlsx or .csv)
│
├── exams/             # Generated quizzes
│
├── reports/           # Score reports and analytics
│
└── src/               # Application source code
```

---

## Current Version

Version: 0.1 (Minimum Viable Product)

Current features:

* Read a study guide spreadsheet.
* Detect major topics.
* Generate a randomized quiz.
* Display questions one at a time.
* Calculate the final score.

---

## Planned Features

### Phase 1

* Import Excel or CSV study guides.
* Generate 10-question quizzes.
* Show final score.

### Phase 2

* Support 50-question certification exams.
* Randomize answer choices.
* Provide explanations for each question.

### Phase 3

* Track learner performance.
* Highlight weak topics.
* Recommend study areas.

### Phase 4

* Adaptive quizzes based on previous performance.
* Support multiple Microsoft certification study guides.
* Dashboard with learning analytics.

---

## Design Principles

* Keep the code simple.
* Favor readability over cleverness.
* Write clear comments.
* Explain complex logic.
* Minimize dependencies.
* Build one feature at a time.

---

## Technologies

* Python
* FastAPI (or Flask)
* HTML
* CSS
* JavaScript
* Google Sheets API (optional)
* Excel (.xlsx) support

---

## How to Use

1. Place your study guide inside the `data` folder.
2. Start the application.
3. Click **Generate Quiz**.
4. Answer each question.
5. View your score and explanations.
6. Review recommended study topics.

---

## Long-Term Vision

Create a reusable learning platform that can generate certification-quality practice exams for multiple Microsoft Azure certifications using only structured study guides as the content source.
