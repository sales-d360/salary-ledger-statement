// Chronological transaction register data (FY 2025-26)
const transactions = [
    { date: "05/05/2025", vtype: "BPmt", ref: "566880405", head: "ICICI Bank A/c", amount: 25000.00 },
    { date: "05/06/2025", vtype: "BPmt", ref: "566880416", head: "ICICI Bank A/c", amount: 25000.00 },
    { date: "05/07/2025", vtype: "BPmt", ref: "566880430", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "05/08/2025", vtype: "BPmt", ref: "566880442", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "03/09/2025", vtype: "BPmt", ref: "9", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "06/10/2025", vtype: "BPmt", ref: "22", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "05/11/2025", vtype: "BPmt", ref: "29", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "06/12/2025", vtype: "BPmt", ref: "36", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "04/01/2026", vtype: "BPmt", ref: "42", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "03/02/2026", vtype: "BPmt", ref: "5", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "07/03/2026", vtype: "BPmt", ref: "22", head: "ICICI Bank A/c", amount: 40000.00 },
    { date: "31/03/2026", vtype: "Jrnl", ref: "Provision", head: "Payable Salary", amount: 40000.00 }
];

// Elements
const tableBody = document.getElementById("ledger-body");
const totalAmountElement = document.getElementById("total-amount");
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
        // parts[2] = Year, parts[1] = Month (0-indexed), parts[0] = Day
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return new Date(dateStr);
}

// Render ledger rows
function renderLedger(data) {
    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="5">No transactions found matching the filters.</td>
            </tr>
        `;
        totalAmountElement.innerHTML = `<span class="double-underline">₹ 0.00</span>`;
        return;
    }

    let totalSum = 0;

    data.forEach(tx => {
        totalSum += tx.amount;
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td class="col-date">${tx.date}</td>
            <td class="col-vtype">${tx.vtype}</td>
            <td class="col-ref">${tx.ref}</td>
            <td class="col-head">${tx.head}</td>
            <td class="col-amount col-amount-val">${formatCurrency(tx.amount)}</td>
        `;
        
        tableBody.appendChild(row);
    });

    // Update dynamic sum with accounting underline
    totalAmountElement.innerHTML = `<span class="double-underline">₹ ${formatCurrency(totalSum)}</span>`;
}

// Filter logic
function applyFilters() {
    const vtypeValue = vtypeFilter.value.toLowerCase();
    const searchValue = searchInput.value.toLowerCase().trim();
    const startDateVal = startDateInput.value ? new Date(startDateInput.value) : null;
    const endDateVal = endDateInput.value ? new Date(endDateInput.value) : null;

    const filtered = transactions.filter(tx => {
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
                // Set hours to 23:59:59 to include the end date fully
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
    renderLedger(transactions);
}

// Event Listeners
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
    renderLedger(transactions);
}

// Start application
document.addEventListener("DOMContentLoaded", init);
