let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount')
        return;
    }
    if (date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({ category, amount, date });

    totalAmount += amount;
    totalAmountCell.textContent = `R${totalAmount.toFixed(2)}`;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = expenses.findIndex(exp => exp === expense);
        if (index !== -1) {
            totalAmount -= expenses[index].amount;
            totalAmountCell.textContent = `R${totalAmount.toFixed(2)}`;
            expenses.splice(index, 1);
            expensesTableBody.removeChild(newRow);
        }
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = `R${expense.amount.toFixed(2)}`;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});
