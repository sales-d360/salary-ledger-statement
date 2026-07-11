import os
import re

# Base workspace directory to verify
project_dir = r"C:\Users\admin\.gemini\antigravity\scratch\salary_ledger"
files_to_check = ["index.html", "style.css", "script.js", "logo.png"]

print("--- Running File Presence Check ---")
all_exist = True
for f in files_to_check:
    path = os.path.join(project_dir, f)
    if os.path.exists(path):
        print(f"OK: {f} exists. Size: {os.path.getsize(path)} bytes")
    else:
        print(f"ERROR: {f} is missing!")
        all_exist = False

if not all_exist:
    print("Verification failed: Missing files.")
    exit(1)

print("\n--- Verifying Content Details in index.html ---")
with open(os.path.join(project_dir, "index.html"), "r", encoding="utf-8") as html_file:
    html_content = html_file.read()

required_strings = [
    "D360 BUSINESS ASSIST PVT. LTD.",
    "Plot No. 18, Sy No. 310, Patel Falia",
    "24AAJCD9037G1ZL",
    "+91 8799 600 360",
    "info@d360.tech",
    "Stavan Purveshbhai Shah",
    "Software Engineer",
    "IDBI Bank",
    "Shah Stavan Purveshbhai",
    "220104000205252"
]

for s in required_strings:
    if s in html_content:
        print(f"OK: Found '{s}'")
    else:
        print(f"ERROR: '{s}' not found in index.html!")

print("\n--- Verifying JavaScript Data and Calculations ---")
with open(os.path.join(project_dir, "script.js"), "r", encoding="utf-8") as js_file:
    js_content = js_file.read()

# Extract transactions for stavan
stavan_matches = re.findall(r'employeeId:\s*"stavan".*?amount:\s*([0-9.]+)', js_content)
stavan_amounts = [float(a) for a in stavan_matches]
stavan_sum = sum(stavan_amounts)
print(f"Stavan's transactions found: {len(stavan_amounts)}")
print(f"Stavan's Computed Sum: Rs. {stavan_sum:,.2f}")

# Extract transactions for dhruvil
dhruvil_matches = re.findall(r'employeeId:\s*"dhruvil".*?amount:\s*([0-9.]+)', js_content)
dhruvil_amounts = [float(a) for a in dhruvil_matches]
dhruvil_sum = sum(dhruvil_amounts)
print(f"Dhruvil's transactions found: {len(dhruvil_amounts)}")
print(f"Dhruvil's Computed Sum: Rs. {dhruvil_sum:,.2f}")

if stavan_sum == 450000.0 and dhruvil_sum == 806000.0:
    print("OK: Stavan's sum matches Rs. 450,000.00 and Dhruvil's sum matches Rs. 806,000.00 exactly!")
else:
    print(f"ERROR: Incorrect sums. Stavan: {stavan_sum} (expected 450000.0), Dhruvil: {dhruvil_sum} (expected 806000.0)")

print("\n--- Verifying CSS Accounting Rules ---")
with open(os.path.join(project_dir, "style.css"), "r", encoding="utf-8") as css_file:
    css_content = css_file.read()

css_indicators = [
    "double-underline",
    "border-top",
    "text-align: right",
    "font-weight: 700",
    "@media print",
    "display: table-row-group"
]

for ind in css_indicators:
    if ind in css_content:
        print(f"OK: Found CSS indicator '{ind}'")
    else:
        print(f"ERROR: CSS indicator '{ind}' not found in style.css!")

print("\nVerification complete.")
