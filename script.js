// Employee database profile details
const employees = {
    stavan: {
        name: "Stavan Purveshbhai Shah",
        designation: "Software Engineer",
        bankName: "IDBI Bank",
        accountName: "Shah Stavan Purveshbhai",
        accountNo: "220104000205252",
        pfNo: "N.A."
    },
    dhruvil: {
        name: "Dhruvil Tarun Shah",
        designation: "Software Engineer",
        bankName: "The Kalupur commercial co-op Bank Lt",
        accountName: "Dhruvil Tarun Shah",
        accountNo: "1210129950",
        pfNo: "N.A."
    }
};

// Chronological transaction register data
const transactions = [
    // Stavan Purveshbhai Shah transactions (FY 2025-26)
    { employeeId: "stavan", date: "05/05/2025", salaryMonth: "April 2025", vtype: "BPmt", ref: "566880405", head: "ICICI Bank A/c", amount: 25000.00 },
    { employeeId: "stavan", date: "05/06/2025", salaryMonth: "May 2025", vtype: "BPmt", ref: "566880416", head: "ICICI Bank A/c", amount: 25000.00 },
    { employeeId: "stavan", date: "05/07/2025", salaryMonth: "June 2025", vtype: "BPmt", ref: "566880430", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "05/08/2025", salaryMonth: "July 2025", vtype: "BPmt", ref: "566880442", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "03/09/2025", salaryMonth: "August 2025", vtype: "BPmt", ref: "9", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "06/10/2025", salaryMonth: "September 2025", vtype: "BPmt", ref: "22", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "05/11/2025", salaryMonth: "October 2025", vtype: "BPmt", ref: "29", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "06/12/2025", salaryMonth: "November 2025", vtype: "BPmt", ref: "36", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "04/01/2026", salaryMonth: "December 2025", vtype: "BPmt", ref: "42", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "03/02/2026", salaryMonth: "January 2026", vtype: "BPmt", ref: "5", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "07/03/2026", salaryMonth: "February 2026", vtype: "BPmt", ref: "22", head: "ICICI Bank A/c", amount: 40000.00 },
    { employeeId: "stavan", date: "31/03/2026", salaryMonth: "March 2026", vtype: "Jrnl", ref: "Provision", head: "Payable Salary", amount: 40000.00 },

    // Dhruvil Tarun Shah transactions (FY 2025-26 + FY 2026-27 entries)
    { employeeId: "dhruvil", date: "05/05/2025", salaryMonth: "April 2025", vtype: "BPmt", ref: "566880404", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "05/06/2025", salaryMonth: "May 2025", vtype: "BPmt", ref: "566880414", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "05/07/2025", salaryMonth: "June 2025", vtype: "BPmt", ref: "566880428", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "05/08/2025", salaryMonth: "July 2025", vtype: "BPmt", ref: "566880440", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "03/09/2025", salaryMonth: "August 2025", vtype: "BPmt", ref: "8", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "06/10/2025", salaryMonth: "September 2025", vtype: "BPmt", ref: "21", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "05/11/2025", salaryMonth: "October 2025", vtype: "BPmt", ref: "28", head: "ICICI Bank A/c", amount: 41000.00 },
    { employeeId: "dhruvil", date: "06/12/2025", salaryMonth: "November 2025", vtype: "BPmt", ref: "38", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "04/01/2026", salaryMonth: "December 2025", vtype: "BPmt", ref: "43", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "03/02/2026", salaryMonth: "January 2026", vtype: "BPmt", ref: "6", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "07/03/2026", salaryMonth: "February 2026", vtype: "BPmt", ref: "20", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "06/04/2026", salaryMonth: "March 2026", vtype: "BPmt", ref: "2", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "05/05/2026", salaryMonth: "April 2026", vtype: "BPmt", ref: "12", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "04/06/2026", salaryMonth: "May 2026", vtype: "BPmt", ref: "21", head: "ICICI Bank A/c", amount: 55000.00 },
    { employeeId: "dhruvil", date: "06/07/2026", salaryMonth: "June 2026", vtype: "BPmt", ref: "32", head: "ICICI Bank A/c", amount: 50000.00 }
];

// Elements
const printableLedger = document.getElementById("printable-ledger");
const employeeFilter = document.getElementById("filter-employee");
const searchInput = document.getElementById("search-input");
const startDateInput = document.getElementById("filter-start-date");
const endDateInput = document.getElementById("filter-end-date");
const printBtn = document.getElementById("print-btn");
const resetBtn = document.getElementById("reset-btn");

// Helper: Format currency (₹ #,##0.00)
function formatCurrency(value) {
    return value.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Helper: Parse DD/MM/YYYY to Date object
function parseDate(dateStr) {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return new Date(dateStr);
}

// Helper: Format date picker string YYYY-MM-DD to DD/MM/YYYY
function formatDatepickerString(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Update the ledger header period dynamically based on filters or visible transaction dates
function updateLedgerPeriod(data) {
    const periodLabel = document.getElementById("ledger-period-label");
    if (!periodLabel) return;

    const startDateVal = startDateInput.value;
    const endDateVal = endDateInput.value;

    // Case 1: Date filters are active in control panel
    if (startDateVal || endDateVal) {
        if (startDateVal && endDateVal) {
            periodLabel.innerHTML = `Period: <span>${formatDatepickerString(startDateVal)} to ${formatDatepickerString(endDateVal)}</span>`;
        } else if (startDateVal) {
            periodLabel.innerHTML = `Period: <span>From ${formatDatepickerString(startDateVal)}</span>`;
        } else {
            periodLabel.innerHTML = `Period: <span>Up to ${formatDatepickerString(endDateVal)}</span>`;
        }
        return;
    }

    // Case 2: No active date filters (scan visible transactions)
    if (!data || data.length === 0) {
        periodLabel.innerHTML = `Financial Year: <span>N.A.</span>`;
        return;
    }

    // Convert transaction dates to Date objects to find range
    const dates = data.map(tx => parseDate(tx.date));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    // Calculate Indian Financial Year for min/max dates
    const getFyStartYear = (d) => {
        return d.getMonth() >= 3 ? d.getFullYear() : d.getFullYear() - 1;
    };

    const minFyStart = getFyStartYear(minDate);
    const maxFyStart = getFyStartYear(maxDate);

    if (minFyStart === maxFyStart) {
        const nextYearShort = (minFyStart + 1) % 100;
        periodLabel.innerHTML = `Financial Year: <span>${minFyStart}-${nextYearShort}</span>`;
    } else {
        const formatDate = (d) => {
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        };
        periodLabel.innerHTML = `Period: <span>${formatDate(minDate)} to ${formatDate(maxDate)}</span>`;
    }
}

// Render ledger rows partitioned into clean A4 pages
function renderLedger(data) {
    printableLedger.innerHTML = "";

    const empId = employeeFilter.value;
    const emp = employees[empId];

    if (data.length === 0) {
        printableLedger.innerHTML = `
            <!-- Header & Company Info -->
            <div class="ledger-header">
                <div class="logo-container">
                    <img src="logo.png" alt="D360 BUSINESS ASSIST logo">
                </div>
                <div class="company-info">
                    <div class="company-name">D360 BUSINESS ASSIST PVT. LTD.</div>
                    <div class="company-details">
                        <p>Plot No. 18, Sy No. 310, Patel Falia,</p>
                        <p>Nr. Katargam Fire Station, Katargam, Surat, Gujarat, 395004</p>
                        <p>GSTIN: <span class="gstin">24AAJCD9037G1ZL</span></p>
                        <p>Contact: +91 8799 600 360 | Email: info@d360.tech</p>
                    </div>
                </div>
            </div>

            <!-- Heavy border separator -->
            <div class="header-separator"></div>

            <div class="document-title-section">
                <div>
                    <h1 class="document-title">Salary Ledger Statement</h1>
                </div>
                <div class="document-meta">
                    <p id="ledger-period-label">Financial Year: <span>N.A.</span></p>
                </div>
            </div>

            <!-- Employee Profile Block -->
            <div class="employee-profile">
                <div class="profile-card">
                    <span class="profile-label">Employee Name</span>
                    <span class="profile-value emp-name">${emp.name}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Designation</span>
                    <span class="profile-value">${emp.designation}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Bank Name</span>
                    <span class="profile-value">${emp.bankName}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Account Name</span>
                    <span class="profile-value">${emp.accountName}</span>
                </div>
                <div class="profile-card" style="grid-column: span 2;">
                    <span class="profile-label">Account No.</span>
                    <span class="profile-value" style="font-family: monospace; font-size: 0.95rem; font-weight: 600;">${emp.accountNo}</span>
                </div>
            </div>

            <div class="ledger-table-container">
                <table class="ledger-table">
                    <thead>
                        <tr>
                            <th class="col-date">Date</th>
                            <th class="col-month">Salary Month</th>
                            <th class="col-ref">Ref No / Description</th>
                            <th class="col-head">Account Head / Mode</th>
                            <th class="col-amount">Amount (₹)</th>
                            <th class="col-action" style="width: 10%; text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="empty-row">
                            <td colspan="5">No transactions found matching the filters.</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="total-row">
                            <td colspan="4" class="total-label">Grand Total</td>
                            <td class="total-amount col-amount-val">
                                <span class="double-underline">₹ 0.00</span>
                            </td>
                            <td class="col-action"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <!-- Page Footer -->
            <div class="ledger-footer">
                <div>Page 1 of 1</div>
            </div>
        `;
        updateLedgerPeriod(data);
        return;
    }

    const totalSum = data.reduce((sum, tx) => sum + tx.amount, 0);

    // If transactions <= 8, render everything in a single table block
    if (data.length <= 8) {
        const rowsHtml = data.map(tx => `
            <tr>
                <td class="col-date">${tx.date}</td>
                <td class="col-month">${tx.salaryMonth}</td>
                <td class="col-ref">${tx.ref}</td>
                <td class="col-head">${tx.head}</td>
                <td class="col-amount col-amount-val">${formatCurrency(tx.amount)}</td>
                <td class="col-action">
                    <button class="btn-sm" onclick="viewPayslip('${tx.date}', ${tx.amount}, '${tx.salaryMonth}')">View Slip</button>
                </td>
            </tr>
        `).join("");

        printableLedger.innerHTML = `
            <!-- Header & Company Info -->
            <div class="ledger-header">
                <div class="logo-container">
                    <img src="logo.png" alt="D360 BUSINESS ASSIST logo">
                </div>
                <div class="company-info">
                    <div class="company-name">D360 BUSINESS ASSIST PVT. LTD.</div>
                    <div class="company-details">
                        <p>Plot No. 18, Sy No. 310, Patel Falia,</p>
                        <p>Nr. Katargam Fire Station, Katargam, Surat, Gujarat, 395004</p>
                        <p>GSTIN: <span class="gstin">24AAJCD9037G1ZL</span></p>
                        <p>Contact: +91 8799 600 360 | Email: info@d360.tech</p>
                    </div>
                </div>
            </div>

            <!-- Heavy accent border -->
            <div class="header-separator"></div>

            <!-- Title Section -->
            <div class="document-title-section">
                <div>
                    <h1 class="document-title">Salary Ledger Statement</h1>
                </div>
                <div class="document-meta">
                    <p id="ledger-period-label"></p>
                </div>
            </div>

            <!-- Employee Profile Block -->
            <div class="employee-profile">
                <div class="profile-card">
                    <span class="profile-label">Employee Name</span>
                    <span class="profile-value emp-name">${emp.name}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Designation</span>
                    <span class="profile-value">${emp.designation}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Bank Name</span>
                    <span class="profile-value">${emp.bankName}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Account Name</span>
                    <span class="profile-value">${emp.accountName}</span>
                </div>
                <div class="profile-card" style="grid-column: span 2;">
                    <span class="profile-label">Account No.</span>
                    <span class="profile-value" style="font-family: monospace; font-size: 0.95rem; font-weight: 600;">${emp.accountNo}</span>
                </div>
            </div>

            <div class="ledger-table-container">
                <table class="ledger-table">
                    <thead>
                        <tr>
                            <th class="col-date">Date</th>
                            <th class="col-month">Salary Month</th>
                            <th class="col-ref">Ref No / Description</th>
                            <th class="col-head">Account Head / Mode</th>
                            <th class="col-amount">Amount (₹)</th>
                            <th class="col-action" style="width: 10%; text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                    <tfoot>
                        <tr class="total-row">
                            <td colspan="4" class="total-label">Grand Total</td>
                            <td class="total-amount col-amount-val">
                                <span class="double-underline">₹ ${formatCurrency(totalSum)}</span>
                            </td>
                            <td class="col-action"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <!-- Signature block -->
            <div class="signature-section">
                <div class="signature-block">
                    <div class="signature-line"></div>
                    <div class="signature-title">Employee Signature</div>
                    <div class="signature-subtitle">${emp.name}</div>
                </div>
                <div class="signature-block">
                    <div class="signature-line"></div>
                    <div class="signature-title">Authorized Signatory</div>
                    <div class="signature-subtitle">D360 BUSINESS ASSIST PVT. LTD.</div>
                </div>
            </div>

            <div class="ledger-footer">
                <div>Page 1 of 1</div>
            </div>
        `;
    } else {
        // Spans 2 pages (like Dhruvil or Stavan's continuous list)
        const firstPageData = data.slice(0, 7);
        const secondPageData = data.slice(7);

        const rows1Html = firstPageData.map(tx => `
            <tr>
                <td class="col-date">${tx.date}</td>
                <td class="col-month">${tx.salaryMonth}</td>
                <td class="col-ref">${tx.ref}</td>
                <td class="col-head">${tx.head}</td>
                <td class="col-amount col-amount-val">${formatCurrency(tx.amount)}</td>
                <td class="col-action">
                    <button class="btn-sm" onclick="viewPayslip('${tx.date}', ${tx.amount}, '${tx.salaryMonth}')">View Slip</button>
                </td>
            </tr>
        `).join("");

        const rows2Html = secondPageData.map(tx => `
            <tr>
                <td class="col-date">${tx.date}</td>
                <td class="col-month">${tx.salaryMonth}</td>
                <td class="col-ref">${tx.ref}</td>
                <td class="col-head">${tx.head}</td>
                <td class="col-amount col-amount-val">${formatCurrency(tx.amount)}</td>
                <td class="col-action">
                    <button class="btn-sm" onclick="viewPayslip('${tx.date}', ${tx.amount}, '${tx.salaryMonth}')">View Slip</button>
                </td>
            </tr>
        `).join("");

        printableLedger.innerHTML = `
            <!-- Header & Company Info -->
            <div class="ledger-header">
                <div class="logo-container">
                    <img src="logo.png" alt="D360 BUSINESS ASSIST logo">
                </div>
                <div class="company-info">
                    <div class="company-name">D360 BUSINESS ASSIST PVT. LTD.</div>
                    <div class="company-details">
                        <p>Plot No. 18, Sy No. 310, Patel Falia,</p>
                        <p>Nr. Katargam Fire Station, Katargam, Surat, Gujarat, 395004</p>
                        <p>GSTIN: <span class="gstin">24AAJCD9037G1ZL</span></p>
                        <p>Contact: +91 8799 600 360 | Email: info@d360.tech</p>
                    </div>
                </div>
            </div>

            <!-- Heavy accent border -->
            <div class="header-separator"></div>

            <!-- Title Section -->
            <div class="document-title-section">
                <div>
                    <h1 class="document-title">Salary Ledger Statement</h1>
                </div>
                <div class="document-meta">
                    <p id="ledger-period-label"></p>
                </div>
            </div>

            <!-- Employee Profile Block -->
            <div class="employee-profile">
                <div class="profile-card">
                    <span class="profile-label">Employee Name</span>
                    <span class="profile-value emp-name">${emp.name}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Designation</span>
                    <span class="profile-value">${emp.designation}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Bank Name</span>
                    <span class="profile-value">${emp.bankName}</span>
                </div>
                <div class="profile-card">
                    <span class="profile-label">Account Name</span>
                    <span class="profile-value">${emp.accountName}</span>
                </div>
                <div class="profile-card" style="grid-column: span 2;">
                    <span class="profile-label">Account No.</span>
                    <span class="profile-value" style="font-family: monospace; font-size: 0.95rem; font-weight: 600;">${emp.accountNo}</span>
                </div>
            </div>

            <!-- Table 1 (Page 1 content) -->
            <div class="ledger-table-container" style="margin-bottom: 0;">
                <table class="ledger-table">
                    <thead>
                        <tr>
                            <th class="col-date">Date</th>
                            <th class="col-month">Salary Month</th>
                            <th class="col-ref">Ref No / Description</th>
                            <th class="col-head">Account Head / Mode</th>
                            <th class="col-amount">Amount (₹)</th>
                            <th class="col-action" style="width: 10%; text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows1Html}
                    </tbody>
                </table>
            </div>

            <!-- Page 1 Footer (Print-only) -->
            <div class="print-page-footer">
                <div>Page 1 of 2</div>
            </div>

            <!-- Forced print page break -->
            <div class="print-page-break"></div>

            <!-- Table 2 Header Continuation (Print-only) -->
            <div class="ledger-header-continuation">
                <div style="font-weight:700; color:var(--primary-color); font-size: 1rem; text-transform: uppercase;">Salary Ledger - ${emp.name} (Continued)</div>
                <div style="font-size:0.8rem; color:var(--text-muted); font-weight: 600;">Period: FY 2025-26</div>
            </div>
            <div class="header-separator print-header-separator" style="height: 2px; margin-bottom: 1.5rem;"></div>

            <!-- Table 2 (Page 2 content) -->
            <div class="ledger-table-container">
                <table class="ledger-table">
                    <thead class="print-thead-show">
                        <tr>
                            <th class="col-date">Date</th>
                            <th class="col-month">Salary Month</th>
                            <th class="col-ref">Ref No / Description</th>
                            <th class="col-head">Account Head / Mode</th>
                            <th class="col-amount">Amount (₹)</th>
                            <th class="col-action" style="width: 10%; text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows2Html}
                    </tbody>
                    <tfoot>
                        <tr class="total-row">
                            <td colspan="4" class="total-label">Grand Total</td>
                            <td class="total-amount col-amount-val">
                                <span class="double-underline">₹ ${formatCurrency(totalSum)}</span>
                            </td>
                            <td class="col-action"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <!-- Signature block -->
            <div class="signature-section" style="margin-top: 3rem; margin-bottom: 2rem;">
                <div class="signature-block">
                    <div class="signature-line"></div>
                    <div class="signature-title">Employee Signature</div>
                    <div class="signature-subtitle">${emp.name}</div>
                </div>
                <div class="signature-block">
                    <div class="signature-line"></div>
                    <div class="signature-title">Authorized Signatory</div>
                    <div class="signature-subtitle">D360 BUSINESS ASSIST PVT. LTD.</div>
                </div>
            </div>

            <!-- Page 2 Footer -->
            <div class="ledger-footer">
                <div>Page 2 of 2</div>
            </div>
        `;
    }

    updateLedgerPeriod(data);
}

// Helper: Convert number to English currency words
function numberToWords(num) {
    const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    if (num === 0) return 'Zero';
    
    let words = '';
    
    function convertLessThanThousand(n) {
        let str = '';
        if (n >= 100) {
            str += a[Math.floor(n / 100)] + ' Hundred ';
            n %= 100;
        }
        if (n >= 20) {
            str += b[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        if (n > 0) {
            str += a[n] + ' ';
        }
        return str.trim();
    }
    
    let lakh = Math.floor(num / 100000);
    num %= 100000;
    let thousand = Math.floor(num / 1000);
    num %= 1000;
    
    if (lakh > 0) {
        words += convertLessThanThousand(lakh) + ' Lakh ';
    }
    if (thousand > 0) {
        words += convertLessThanThousand(thousand) + ' Thousand ';
    }
    if (num > 0) {
        words += convertLessThanThousand(num);
    }
    
    return (words.trim() + ' Only').replace(/\s+/g, ' ');
}

// Controller: View Payslip in Modal
window.viewPayslip = function(dateStr, amount, salaryMonth) {
    const modal = document.getElementById("payslip-modal");
    const empId = employeeFilter.value;
    const emp = employees[empId];
    
    // Fill dynamic employee values in payslip
    document.getElementById("payslip-emp-name-val").textContent = `: ${emp.name}`;
    document.getElementById("payslip-emp-designation-val").textContent = `: ${emp.designation}`;
    document.getElementById("payslip-emp-pf-val").textContent = `: ${emp.pfNo}`;
    document.getElementById("payslip-bank-val").textContent = emp.bankName;
    document.getElementById("payslip-acc-name-val").textContent = emp.accountName;
    document.getElementById("payslip-acc-no-val").textContent = emp.accountNo;

    // Fill dynamic financial values
    document.getElementById("payslip-date-val").textContent = salaryMonth;
    document.getElementById("payslip-basic-val").textContent = formatCurrency(amount);
    document.getElementById("payslip-total-earn-val").textContent = formatCurrency(amount);
    document.getElementById("payslip-net-val").textContent = `₹ ${formatCurrency(amount)}`;
    document.getElementById("payslip-words-val").textContent = numberToWords(amount);
    
    // Open modal
    modal.classList.add("active");
    document.body.classList.add("modal-open");
};

// Controller: Close Payslip Modal
window.closePayslip = function() {
    const modal = document.getElementById("payslip-modal");
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
};

// Controller: Print Payslip
window.printPayslip = function() {
    window.print();
};

// Filter logic
function applyFilters() {
    const selectedEmp = employeeFilter.value;
    const searchValue = searchInput.value.toLowerCase().trim();
    const startDateVal = startDateInput.value ? new Date(startDateInput.value) : null;
    const endDateVal = endDateInput.value ? new Date(endDateInput.value) : null;

    const filtered = transactions.filter(tx => {
        // Filter by Employee ID first
        if (tx.employeeId !== selectedEmp) {
            return false;
        }

        // Search text filter (Ref No / Head)
        if (searchValue) {
            const matchesRef = tx.ref.toLowerCase().includes(searchValue);
            const matchesHead = tx.head.toLowerCase().includes(searchValue);
            if (!matchesRef && !matchesHead) {
                return false;
            }
        }

        // Date range filter
        if (startDateVal || endDateVal) {
            const txDate = parseDate(tx.date);
            if (startDateVal && txDate < startDateVal) {
                return false;
            }
            if (endDateVal && txDate > endDateVal) {
                endDateVal.setHours(23, 59, 59, 999);
                if (txDate > endDateVal) {
                    return false;
                }
            }
        }

        return true;
    });

    renderLedger(filtered);
}

// Reset filters
function resetFilters() {
    searchInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    applyFilters();
}

// Event Listeners
employeeFilter.addEventListener("change", () => {
    applyFilters();
});
searchInput.addEventListener("input", applyFilters);
startDateInput.addEventListener("change", applyFilters);
endDateInput.addEventListener("change", applyFilters);
resetBtn.addEventListener("click", resetFilters);

printBtn.addEventListener("click", () => {
    window.print();
});

// Init page details
function init() {
    // Initial render
    applyFilters();
}

// Start application
document.addEventListener("DOMContentLoaded", init);
