const $expenseForm = document.getElementById('expense-form');
const $expensesList = document.getElementById('expenses-list');
const $expenseInpt = document.getElementById('expense-inpt');
const $categoryInpt = document.getElementById('category-inpt');
const $noteInpt = document.getElementById('note-inpt');
const $amount = document.getElementById('amount');

let expenseArr = [];
let editingIndex = null;
let totalExpenses = 0;

function addExpenseToTotal(amount) {
  totalExpenses += parseFloat(amount);
  updateTotalExpenseDisplay()
}

function updateTotalAfterEdit(newAmount, oldAmount) {
  totalExpenses += parseFloat(newAmount) - parseFloat(oldAmount);
  updateTotalExpenseDisplay()
}

function updateTotalExpenseDisplay() {
  $amount.textContent = totalExpenses.toFixed(2);
}

function getDataForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const expenseData = Object.fromEntries(formData);

  expenseData.expense = parseFloat(expenseData.expense).toFixed(2);

  if ( editingIndex !== null ) {
    const oldExpense = expenseArr[editingIndex].expense;
    updateTotalAfterEdit(expenseData.expense, oldExpense);
    expenseArr[editingIndex] = expenseData;
  } else {
    expenseArr.unshift(expenseData);
    addExpenseToTotal(expenseData.expense);
  }

  resetForm();
  renderExpensesItems();
}

function resetForm() {
  $expenseForm.reset();
  editingIndex = null;
}

function renderExpensesItems() {
  let itemHTML = '';
  expenseArr.forEach( (expense, index) => {
    itemHTML += `
    <li class="expenses-list__item">
      <h3 class="expenses-list__category">${expense.category}</h3>
      <p class="expenses-list__note">${expense.note}</p>
      <p class="expenses-list__expense">$ <span>${parseFloat(expense.expense).toFixed(2)}</span></p>
      <div class="expenses-list__buttons">
        <button type="button" class="edit-btn" data-index="${index}" aria-label="Editar gasto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" hidden="24" aria-hidden="true" role="img" focusable="false">
            <path fill="currentColor"
              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
          </svg>
        </button>
        <button type="button" class="del-btn" data-index="${index}" aria-label="Eliminar gasto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="21" hidden="21" aria-hidden="true" role="img" focusable="false">
            <path fill="currentColor"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
          </svg>
        </button>
      </div>
    </li>`
  } );
  $expensesList.innerHTML = itemHTML;

  document.querySelectorAll('.edit-btn').forEach( button => button.addEventListener('click', editExpense) );
  document.querySelectorAll('.del-btn').forEach( button => button.addEventListener('click', delExpense) );
}

function editExpense(e) {
  const index = e.currentTarget.dataset.index;
  const { category, note, expense } = expenseArr[index];

  $categoryInpt.value = category;
  $noteInpt.value = note;
  $expenseInpt.value = expense;

  editingIndex = index;
}

function delExpense(e) {
  const index = e.currentTarget.dataset.index;
  const expenseToDel = expenseArr[index].expense;
  totalExpenses -= parseFloat(expenseToDel);
  updateTotalExpenseDisplay();

  expenseArr.splice(index, 1);
  renderExpensesItems()
}

$expenseForm.addEventListener('submit', getDataForm);