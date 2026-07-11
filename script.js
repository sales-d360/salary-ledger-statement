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

// Chronological transaction register data (FY 2025-26)
const transactions = [
    // Stavan Purveshbhai Shah transactions
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

    // Mock entries for Dhruvil Tarun Shah (to demonstrate multi-employee selector works)
    { employeeId: "dhruvil", date: "05/05/2025", salaryMonth: "April 2025", vtype: "BPmt", ref: "1001", head: "HDFC Bank A/c", amount: 35000.00 },
    { employeeId: "dhruvil", date: "05/06/2025", salaryMonth: "May 2025", vtype: "BPmt", ref: "1002", head: "HDFC Bank A/c", amount: 35000.00 },
    { employeeId: "dhruvil", date: "05/07/2025", salaryMonth: "June 2025", vtype: "BPmt", ref: "1003", head: "HDFC Bank A/c", amount: 38000.00 }
];

// Elements
const tableBody = document.getElementById("ledger-body");
const totalAmountElement = document.getElementById("total-amount");
const employeeFilter = document.getElementById("filter-employee");
const vtypeFilter = document.getElementById("filter-vtype");
const searchInput = document.getElementById("search-input");
const startDateInput = document.getElementById("filter-start-date");
const endDateInput = document.getElementById("filter-end-date");
const printBtn = document.getElementById("print-btn");
const resetBtn = document.getElementById("reset-btn");
const printDateElement = document.getElementById("print-date");

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

// Render ledger rows
function renderLedger(data) {
    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="6">No transactions found matching the filters.</td>
            </tr>
        `;
        totalAmountElement.innerHTML = `<span class="double-underline">₹ 0.00</span>`;
        updateLedgerPeriod(data);
        return;
    }

    let totalSum = 0;

    data.forEach(tx => {
        totalSum += tx.amount;
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td class="col-date">${tx.date}</td>
            <td class="col-month">${tx.salaryMonth}</td>
            <td class="col-ref">${tx.ref}</td>
            <td class="col-head">${tx.head}</td>
            <td class="col-amount col-amount-val">${formatCurrency(tx.amount)}</td>
            <td class="col-action">
                <button class="btn-sm" onclick="viewPayslip('${tx.date}', ${tx.amount}, '${tx.salaryMonth}')">View Slip</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });

    // Update dynamic sum with accounting underline
    totalAmountElement.innerHTML = `<span class="double-underline">₹ ${formatCurrency(totalSum)}</span>`;
    
    // Dynamically calculate and update period header
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

// Update employee details in HTML profile block and signature
function updateEmployeeProfile(empId) {
    const emp = employees[empId];
    if (!emp) return;
    document.getElementById("emp-name").textContent = emp.name;
    document.getElementById("emp-designation").textContent = emp.designation;
    document.getElementById("emp-bank").textContent = emp.bankName;
    document.getElementById("emp-acc-name").textContent = emp.accountName;
    document.getElementById("emp-acc-no").textContent = emp.accountNo;
    document.getElementById("sig-emp-name").textContent = emp.name;
}

// Filter logic
function applyFilters() {
    const selectedEmp = employeeFilter.value;
    const vtypeValue = vtypeFilter.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase().trim();
    const startDateVal = startDateInput.value ? new Date(startDateInput.value) : null;
    const endDateVal = endDateInput.value ? new Date(endDateInput.value) : null;

    const filtered = transactions.filter(tx => {
        // Filter by Employee ID first
        if (tx.employeeId !== selectedEmp) {
            return false;
        }

        // Voucher Type filter
        if (vtypeValue && tx.vtype.toLowerCase() !== vtypeValue) {
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
    vtypeFilter.value = "";
    searchInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    applyFilters();
}

// Event Listeners
employeeFilter.addEventListener("change", () => {
    updateEmployeeProfile(employeeFilter.value);
    applyFilters();
});
vtypeFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
startDateInput.addEventListener("change", applyFilters);
endDateInput.addEventListener("change", applyFilters);
resetBtn.addEventListener("click", resetFilters);

printBtn.addEventListener("click", () => {
    window.print();
});

// Init page details
function init() {
    // Render today's timestamp in footer
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    printDateElement.textContent = now.toLocaleDateString('en-US', options);

    // Initial render
    updateEmployeeProfile(employeeFilter.value);
    applyFilters();
}

// Start application
document.addEventListener("DOMContentLoaded", init);
