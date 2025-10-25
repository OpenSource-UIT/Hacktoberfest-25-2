# Puzzle Vault

Welcome to Puzzle Vault — a small, beginner-friendly web app of riddles and puzzles created for learning and contribution.

## Features

- Simple, responsive UI (HTML/CSS/JS)
- Loads puzzles from `puzzles.json`
- Navigation (Next / Previous), answer checking, and a progress indicator

## Getting started

### Installation

```bash
git clone https://github.com/OpenSource-UIT/Hacktoberfest-25-4.git
cd Hacktoberfest-25-4
```

Open `index.html` in your browser or serve the folder locally:

## How to use

- Read the puzzle displayed on the page
- Type your answer and click "Check Answer"
- Use "Show Answer" to reveal the solution (if available)
- Navigate using Next / Previous buttons

## Short list of issues (priority)

### High
- Puzzles not showing: the `showPuzzle()` function is currently disabled, so the UI does not populate puzzle text on load.
- Show Answer unresponsive: script queries `show-ans` but the button id is `show-answer`, so the listener isn't attached.
- Check Answer id typo: the Check button in HTML uses `chek-answer` (typo) and the script may not find it.

### Medium
- Progress indicator is invisible: `#progress` lacks a visible background color.
- Navigation edge-case: Next handler can set `currentIndex` to `puzzles.length` (off-by-one).

### Low
- Minor responsive styling improvements suggested for small screens.

## Project structure

```
Puzzle Vault/
├── index.html
├── style.css
├── script.js
├── puzzles.json
└── README.md
```

## Testing your fixes

1. Open the app (index.html or served)
2. Reproduce the issue you fix
3. Apply the change, reload, and verify the behavior
4. Check DevTools console for errors

## Contributing

- One bug per PR; keep fixes focused
- Add a short description of the change and how you tested it
- Be respectful and provide helpful PR notes

### Good first issues
- Fix the `showPuzzle()` implementation
- Attach the Show Answer listener correctly
- Correct the Check Answer button id
- Make the progress bar visually visible
- Fix navigation boundary logic

## License

MIT


