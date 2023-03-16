document.getElementById('expForm').addEventListener('submit',addExpense);

//initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e)
{
    e.preventDefault();

//get type, name, date, and amount
let type = document.getElementById('type').value;
console.log(type);
let name = document.getElementById('name').value;
console.log(name);
let date = document.getElementById('date').value;
console.log(date);
let amount = document.getElementById('amount').value;
console.log(amount);

if(type !='chooseOne' && name.length > 0 && date != 0 && amount > 0)
{
    const  expense =
    {
        type,
        name,
        date,
        amount,
        id:expenses.length > 0 ? expenses[expenses.length -1].id + 1 : 1,
    }
    expenses.push(expense);
    //localstorage
    localStorage.setItem('expenses',JSON.stringify(expenses));
  }
    document.getElementById('expForm').reset();
    showExpenses();
}

const showExpenses = () => 
{

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++)
    {
        expenseTable.innerHTML +=`
          <tr> 
            <td>${expenses[i].type}</td>
            <td>${expenses[i].name}</td>
            <td>${expenses[i].date}</td>
            <td>$${expenses[i].amount}</td>
            <td><a class="deleteButton" onClick="deleteExpense(${expenses[i].id})">Delete</td>
          </tr>
        `;
    }
}

const deleteExpense = (id) => 
{
    for(let i = 0; i < expenses.length;i++)
    {
        if(expenses[i].id == id)
        {
            expenses.splice(i,1);
        }
    }

    //local storage
    localStorage.setItem('expenses',JSON.stringify(expenses));
    showExpenses();
}
showExpenses();


