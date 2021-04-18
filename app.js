const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesoutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert-controller");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = ' ';
  amountInput.value  = ' ';
}

confirmBtn.addEventListener('click',() => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <=0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ){
    alertCtrl
    .create({ message: 'Please Enter Valid reason and amount',
      header: 'Invalid Input',
      buttons:['Okay']
    }).then(alertElement =>{
      alertElement.present();
    });
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;
  expensesList.appendChild(newItem)
  totalExpenses += +enteredAmount;
  totalExpensesoutput.textContent = totalExpenses;
  clear();
  });

cancelBtn.addEventListener('click',clear);
