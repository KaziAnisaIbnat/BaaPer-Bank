//             !!!!STEP by STEP!!!
// (1) add event handler to deposit button.
// (2) get deposit amount from the deposit input field.
//(2.5) convert string deposit amount to a number type.
// (3) clear the deposit input feild after getting the value.
// (4) get the previous deposit total.
// (5) calculate new deposit and set the value to the deposit total.
// (6) get current balance total.
// (7) calculate the new balance and set it to the balance total element.
/************************************************************************* */

// STEP: 1
document.getElementById('btn-deposit').addEventListener('click',function(){
// STEP: 2 
const depositFiled =document.getElementById('deposit-filed');
const newDepositAmountString = depositFiled.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// STEP: 3
depositFiled.value = '';
// STEP: 4
 const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalString);
 // STEP: 5
const newDepositTotal = previousDepositTotal + newDepositAmount; depositTotalElement.innerText = newDepositTotal;
// STEP: 6
 const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
 // STEP: 7
const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;
});