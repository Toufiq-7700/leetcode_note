# 📘 LeetCode Study Tracker

A premium, dark-themed personal LeetCode problem tracker and study notes dashboard. Built with vanilla HTML, CSS & JS — no frameworks, no build steps. Perfect for GitHub Pages hosting.

---

## 📂 Project Structure

```
LeetCode/
├── index.html          ← Dashboard homepage (cards, stats, filters)
├── style.css           ← Shared design system (used by ALL pages)
├── problems.js         ← Card metadata registry (dashboard data)
├── README.md           ← This file
└── problems/           ← One HTML file per solved problem
    ├── 1-two-sum.html
    ├── 15-three-sum.html
    ├── 42-trapping-rain-water.html
    └── 167-two-sum-ii.html
```

---

## 🚀 How to Use

1. Open `index.html` in any browser (or host on GitHub Pages).
2. Click any card to navigate to the full study workspace for that problem.
3. Use the search bar, difficulty tabs, tag pills, and review toggle to filter.
4. Star ⭐ any card to flag it for review (persists in browser localStorage).

---

## ➕ How to Add a New Problem

Adding a new problem requires **two steps**:

### Step 1: Add card metadata to `problems.js`

Open `problems.js` and add a new entry to the `PROBLEMS` array:

```javascript
{
    id: "prob-XXX",            // Unique ID (e.g. "prob-121")
    number: "XXX",             // Problem number (e.g. "121")
    name: "Problem Title",     // Full title
    difficulty: "Easy",        // "Easy" | "Medium" | "Hard"
    tags: ["Array", "DP"],     // Topic tags
    dateSolved: "2025-06-01",  // YYYY-MM-DD
    statement: "Brief one-line problem summary in your own words.",
    needsReview: false,        // true = flagged for review
    fileUrl: "problems/XXX-problem-slug.html"  // Path to detail page
},
```

### Step 2: Create the problem HTML file

Create a new file inside `problems/` folder. Use this **copy-paste template**:

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>#XXX Problem Title | LeetCode Tracker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="app-container">
        <div class="back-link-container">
            <a href="../index.html" class="back-link"><i data-lucide="arrow-left"></i> Back to Dashboard</a>
        </div>
        <div class="workspace-card glass-panel">
            <div class="workspace-header">
                <div class="workspace-header-info">
                    <span class="problem-num">#XXX</span>
                    <span class="difficulty-badge easy">Easy</span> <!-- easy | medium | hard -->
                    <div class="workspace-title-row"><h2>Problem Title</h2></div>
                </div>
                <div class="workspace-action-buttons">
                    <button class="btn-icon bookmark" id="bookmark-btn" title="Toggle Review Bookmark">
                        <i data-lucide="star"></i>
                    </button>
                    <span style="font-size:0.8rem;color:var(--text-muted);margin-left:1rem;">YYYY-MM-DD</span>
                </div>
            </div>
            <div class="workspace-content-grid">
                <!-- LEFT PANEL: Statement, Examples, Complexity -->
                <div class="workspace-col-left">
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="align-left"></i> Problem Statement</h3>
                        <div class="statement-text">YOUR PROBLEM STATEMENT HERE</div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="terminal"></i> Input/Output Examples</h3>
                        <div class="examples-list">
                            <div class="example-box">
                                <div class="example-title">Example 1</div>
                                <div class="example-io">
                                    <span>Input:</span><span>YOUR INPUT</span>
                                    <span>Output:</span><span>YOUR OUTPUT</span>
                                </div>
                                <div class="example-expl">YOUR EXPLANATION</div>
                                <div class="visual-block">OPTIONAL VISUAL / POINTER TRACE</div>
                            </div>
                        </div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="activity"></i> Complexity Analysis</h3>
                        <div class="complexity-grid">
                            <div class="complexity-box time">
                                <div class="complexity-header"><span class="complexity-label">Time</span><i data-lucide="clock" style="width:14px;height:14px;color:#f472b6;"></i></div>
                                <div class="complexity-value">O(?)</div>
                                <div class="complexity-desc">TIME EXPLANATION</div>
                            </div>
                            <div class="complexity-box space">
                                <div class="complexity-header"><span class="complexity-label">Space</span><i data-lucide="box" style="width:14px;height:14px;color:#38bdf8;"></i></div>
                                <div class="complexity-value">O(?)</div>
                                <div class="complexity-desc">SPACE EXPLANATION</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- RIGHT PANEL: Approach, Code, Notes -->
                <div class="workspace-col-right">
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="code"></i> Approach: <span style="color:var(--accent-indigo);text-transform:none;margin-left:0.25rem;">APPROACH NAME</span></h3>
                        <div class="notes-box">STEP BY STEP APPROACH</div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="alert-circle"></i> Wrong Attempts</h3>
                        <div class="notes-box" style="border-color:rgba(239,68,68,0.2);background:rgba(239,68,68,0.02);color:#fca5a5;">WHAT YOU TRIED BEFORE</div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="cpu"></i> Optimal Implementation</h3>
                        <div class="code-container">
                            <div class="code-bar">
                                <span class="code-lang-label"><i data-lucide="terminal" style="width:14px;height:14px;"></i> python</span>
                                <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" style="width:14px;height:14px;"></i> Copy</button>
                            </div>
                            <pre><code class="language-python" id="code-block">YOUR CODE HERE</code></pre>
                        </div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="lightbulb"></i> Key Takeaway</h3>
                        <div class="pattern-takeaway"><i data-lucide="zap" class="takeaway-icon"></i><div class="takeaway-text">YOUR KEY PATTERN RULE</div></div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="link"></i> Similar Problems</h3>
                        <div class="similar-grid">
                            <span class="similar-pill"><i data-lucide="link"></i> #XX Problem</span>
                        </div>
                    </div>
                    <div class="section-block">
                        <h3 class="section-header"><i data-lucide="pencil"></i> Personal Notes</h3>
                        <div class="notes-box" style="border-style:solid;border-color:rgba(255,255,255,0.06);background:rgba(255,255,255,0.01);">YOUR PERSONAL NOTES</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/languages/python.min.js"></script>
    <script>
        hljs.highlightAll();
        lucide.createIcons();

        // Copy Code Functionality
        function copyCode(btn) {
            const code = document.getElementById('code-block').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px; color: #10b981;"></i> Copied!`;
                lucide.createIcons();
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    lucide.createIcons();
                }, 2000);
            });
        }

        // Bookmark Review System
        const problemId = "prob-XXX"; // Unique ID matching problems.js entry
        const bookmarkBtn = document.getElementById('bookmark-btn');
        let bookmarkedIds = [];

        try {
            const stored = localStorage.getItem('leetcode_bookmarks');
            if (stored) {
                bookmarkedIds = JSON.parse(stored);
            }
        } catch(e) {
            console.error(e);
        }

        if (bookmarkedIds.includes(problemId)) {
            bookmarkBtn.classList.add('active');
        }

        bookmarkBtn.addEventListener('click', () => {
            const index = bookmarkedIds.indexOf(problemId);
            if (index > -1) {
                bookmarkedIds.splice(index, 1);
                bookmarkBtn.classList.remove('active');
            } else {
                bookmarkedIds.push(problemId);
                bookmarkBtn.classList.add('active');
            }
            localStorage.setItem('leetcode_bookmarks', JSON.stringify(bookmarkedIds));
        });
    </script>
</body>
</html>
```

### Checklist for Each Card

| # | Field | Where | Example |
|---|-------|-------|---------|
| 1 | Problem Number | `problems.js` + HTML | `"167"` |
| 2 | Problem Name | `problems.js` + HTML | `"Two Sum II"` |
| 3 | Difficulty | `problems.js` + HTML | `"Easy"` / `"Medium"` / `"Hard"` |
| 4 | Tags | `problems.js` | `["Array", "Two Pointers"]` |
| 5 | Date Solved | `problems.js` + HTML | `"2025-05-23"` |
| 6 | Statement | `problems.js` + HTML | Brief summary in own words |
| 7 | Examples | HTML only | Input, Output, Explanation, Visual |
| 8 | Approach Name | HTML only | `"Two Pointers"` |
| 9 | Step-by-step | HTML only | Detailed approach walkthrough |
| 10 | Wrong Attempts | HTML only | What you tried before |
| 11 | Code | HTML only | Clean, commented solution |
| 12 | Time Complexity | HTML only | `O(n)` + explanation |
| 13 | Space Complexity | HTML only | `O(1)` + explanation |
| 14 | Key Takeaway | HTML only | Pattern rule |
| 15 | Similar Problems | HTML only | Related problem links |
| 16 | Personal Notes | HTML only | Study reflections |
| 17 | Needs Review | `problems.js` | `true` / `false` |
| 18 | File URL | `problems.js` | `"problems/XXX-slug.html"` |

---

## 🎨 Supported Code Languages

Change the `language-python` class on the `<code>` tag and the label text:
- `language-python` → Python
- `language-javascript` → JavaScript  
- `language-cpp` → C++
- `language-java` → Java

---

## 🌐 GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages → Source → Deploy from branch** (main).
3. Your tracker will be live at `https://username.github.io/repo-name/`.
