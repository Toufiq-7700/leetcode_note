# LeetCode Problem Tracker

A minimal, premium, dark-themed personal LeetCode tracker and study workspace. Built purely with static HTML and CSS — no frameworks, no databases, no complex setup.

---

## 🚀 How the Project Works

1. **Dashboard Home (`index.html`)**:
   - Statically contains a grid of cards for each solved problem.
   - Includes a simple, fast search input to filter cards instantly by name, number, or description directly within the browser's DOM.
2. **Individual Problem Pages (`problems/*.html`)**:
   - Clicking any card on the home page navigates to a dedicated page for that specific problem.
   - Back links on each page allow you to return to the dashboard effortlessly.
3. **Shared Design System (`style.css`)**:
   - A central CSS stylesheet loaded by all pages. It keeps the dark-theme colors, responsive grid, glassmorphism panel styles, and layout elements completely consistent without duplicate code.

---

## 📝 What is Documented for Each Problem

Each problem file (under `problems/`) details the following information:

| Field / Section | What is shown |
| :--- | :--- |
| **Problem Number & Title** | Unique identifier (e.g., `#1. Two Sum`) at the top of the workspace and on the card. |
| **Question** | The complete LeetCode description, highlighting core constraints. |
| **Approach** | Step-by-step description of the algorithm and how the data structure is used to solve the problem. |
| **Test Cases** | Tables displaying example inputs, outputs, explanations, and key simulation visual traces. |
| **Complexity Analysis** | Linear/quadratic time and space metrics (e.g., `O(N)` Time / `O(N)` Space) with clear reasoning. |
| **Optimal Implementation** | Fully highlighted code block (e.g., Python) equipped with an interactive **Copy Code** button. |
| **Wrong Attempts** | Review of previous brute force or incorrect trials to remind you what traps to avoid. |
| **Key Takeaway** | Core pattern identification (e.g., "Search matching pair in unsorted array = think Hash Map"). |

---

## 📂 Directory Layout

```
LeetCode/
├── index.html          # Dashboard homepage (static cards & quick search)
├── style.css           # Central stylesheet (colors, typography, grid, cards)
└── problems/           # One static HTML file per problem
    ├── 1-two-sum.html
    ├── 15-three-sum.html
    ├── 42-trapping-rain-water.html
    └── 167-two-sum-ii.html
```

---

## ➕ Adding a New Problem Card

To add a new problem to this workspace, simply ask the assistant and provide these fields:
1. **Problem #**
2. **Title**
3. **Question**
4. **Approach**
5. **Test Cases**
6. **Input/Output (Signature)**

The assistant will automatically create the corresponding file in `problems/` and add the static link card in `index.html`.
