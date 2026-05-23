/*
 * ═══════════════════════════════════════════════════════════════
 *  LeetCode Tracker — Problems Metadata Registry
 * ═══════════════════════════════════════════════════════════════
 *
 *  This file contains the CARD-LEVEL metadata used by the
 *  dashboard (index.html) to render cards, stats, filters,
 *  and search results.
 *
 *  ► To add a new problem:
 *    1. Create a new HTML file in the problems/ folder
 *       (use the template from README.md).
 *    2. Add a new entry to the PROBLEMS array below.
 *
 *  ► Fields per entry:
 *    id            — Unique string  (e.g. "prob-167")
 *    number        — Problem number (string)
 *    name          — Problem title
 *    difficulty    — "Easy" | "Medium" | "Hard"
 *    tags          — Array of topic strings
 *    dateSolved    — "YYYY-MM-DD"
 *    statement     — One-line summary
 *    needsReview   — true / false (default flag; stars are also
 *                    saved interactively in localStorage)
 *    fileUrl       — Relative path to the standalone HTML page
 * ═══════════════════════════════════════════════════════════════
 */

const PROBLEMS = [
    {
        id: "prob-167",
        number: "167",
        name: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        tags: ["Array", "Two Pointers", "Binary Search"],
        dateSolved: "2025-05-23",
        statement: "Given a 1-indexed sorted array of integers, find two different numbers that add up to a target number. Return their indices incremented by 1 as an array of length 2.",
        needsReview: true,
        fileUrl: "problems/167-two-sum-ii.html"
    },
    {
        id: "prob-1",
        number: "1",
        name: "Two Sum",
        difficulty: "Easy",
        tags: ["Array", "Hash Table"],
        dateSolved: "2025-05-20",
        statement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        needsReview: false,
        fileUrl: "problems/1-two-sum.html"
    },
    {
        id: "prob-15",
        number: "15",
        name: "3Sum",
        difficulty: "Medium",
        tags: ["Array", "Two Pointers", "Sorting"],
        dateSolved: "2025-05-22",
        statement: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        needsReview: true,
        fileUrl: "problems/15-three-sum.html"
    },
    {
        id: "prob-42",
        number: "42",
        name: "Trapping Rain Water",
        difficulty: "Hard",
        tags: ["Array", "Two Pointers", "Dynamic Programming", "Monotonic Stack"],
        dateSolved: "2025-05-21",
        statement: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        needsReview: true,
        fileUrl: "problems/42-trapping-rain-water.html"
    }
];
