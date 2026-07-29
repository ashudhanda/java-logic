# Java Logic — Logic Building Practice

A practice website for building Java programming logic — step-by-step dry runs, level-wise logic questions, MCQ tests, and a coding question bank. Pure HTML/CSS/JS, no build step, no dependencies.

## Pages

| Page | What's inside |
|---|---|
| `index.html` | Home — overview and navigation to all sections |
| `dryrun.html` | **Interactive Dry Run Visualizer** — walk through code execution step by step |
| `questions.html` | Level-wise logic building questions |
| `mcq.html` | **MCQ Test** — 150+ exam-ready Java MCQs (151 questions across 6 modules) with instant correct/incorrect feedback |
| `coding.html` | **Coding Question Bank** — 106 programs with name + logic, organized module-wise |

## Quick Start

No installs needed — it's a fully static site:

```bash
git clone https://github.com/ashudhanda/java-logic.git
cd java-logic
```

Then open `index.html` in a browser, or serve it locally:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

## Project Structure

```
java-logic/
├── index.html        # Home page
├── dryrun.html       # Dry run visualizer
├── questions.html    # Logic questions
├── mcq.html          # MCQ test
├── coding.html       # Coding question bank
├── css/              # Stylesheets
└── js/               # Page logic + question data
```

## Tech

- **HTML/CSS/JS** in separate files — no frameworks, no build tools
- Works offline once cloned

## License

MIT — see [LICENSE](LICENSE).
