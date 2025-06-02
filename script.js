// script.js

let accountId = 1;
const accountForm = document.getElementById('account-form');
const tableBody = document.querySelector('#accounts-table tbody');

// Store accounts locally (you can later replace this with API calls to SQL backend)
let accounts = [];

accountForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const balance = parseFloat(document.getElementById('balance').value);

  if (name && email && !isNaN(balance)) {
    const newAccount = {
      id: accountId++,
      name,
      email,
      balance: balance.toFixed(2)
    };

    accounts.push(newAccount);
    renderTable();
    accountForm.reset();
  }
});

function renderTable() {
  tableBody.innerHTML = '';

  accounts.forEach(account => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${account.id}</td>
      <td>${account.name}</td>
      <td>${account.email}</td>
      <td>$${account.balance}</td>
    `;
    tableBody.appendChild(row);
  });
}
