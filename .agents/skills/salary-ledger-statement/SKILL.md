---
name: salary-ledger-statement
description: Standards, layouts, print pagination rules, and validation checks for employee salary ledger statements.
---

# Salary Ledger Statement Skill Guide

This skill specifies the formatting, accounting standards, print layout guidelines, and verification checks for generating a premium, corporate-grade Salary Ledger Statement.

## 1. Design & Typography Standards
- **Primary Theme**: Premium Corporate using Deep Navy Blue (`#0f172a` or equivalent) as the primary brand color, combined with Slate Blue accents, cool gray grids, and clean white backgrounds.
- **Typography**: Utilize Google Fonts such as *Inter* (for clean, readable body text) and *Outfit* (for bold, structured headers) rather than browser defaults.
- **Corporate Header**: Position the company logo in the top-left corner with company details (Name, Address, GSTIN, Contact info) right-aligned.
- **Employee Profile Block**: Display employee details (Name, Designation, Bank, Account Name, Account No.) in a clear, structured grid block.

## 2. Table & Column Specifications
Columns in the ledger must follow a clear chronological register structure:
1. **Date**: Left-aligned, styled consistently.
2. **Voucher Type**: Left-aligned (e.g. BPmt, Jrnl).
3. **Ref No / Description**: Left-aligned.
4. **Account Head / Mode**: Left-aligned.
5. **Amount (₹)**: Right-aligned, formatted with Indian currency commas (`#,##0.00`).

## 3. Accounting Summation Formatting
Apply standard corporate accounting guidelines to the Grand Total row:
- The total row text and number must be explicitly **bold**.
- A **single-line border** must reside on top of the total cell.
- A **double-line underline** (double bottom border) must be applied right below the final number.

## 4. Print & PDF Layout Controls (Page-Breaks)
To prevent table footer repetition and layout bugs when printing/saving as PDF:
- **No Footer Duplication**: Override the browser's default `tfoot` printing behavior (which repeats the footer on every page) by setting the CSS property `tfoot { display: table-row-group; }`. This renders the grand total row exclusively at the end of the data rows on the final page.
- **Avoid Row Breaks**: Add `.total-row { page-break-inside: avoid; page-break-after: auto; }` to prevent the grand total row from splitting awkwardly.
- **Allow Natural Breaks**: Ensure the outer sheet container is set to `page-break-inside: auto` in the print media query so content can page naturally.
- **Hide UI Controls**: Hide interactive panels, buttons, and filters during print via `.control-panel { display: none !important; }` in `@media print`.

## 5. Verification Check
Run the automated verification script in the project directory to check file presence, data correctness, and CSS accounting rules compliance:
```bash
python .agents/skills/salary-ledger-statement/scripts/verify_ledger.py
```
