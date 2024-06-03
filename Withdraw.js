/*
(1) add event handler to Withdraw button.
(2) get the withdraw amount.
(3) clear the withdraw input field.
(4) get previous withdraw totatl.
(5) calculate total withdraw amount and set it to the withdraw total element.

*/
// STEP: 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
// STEP: 2 
const withdrawFiled = document.getElementById('withdraw-filed');
const newWithdrawAmountString = withdrawFiled.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// STEP: 3  
withdrawFiled.value = "";
// STEP: 4
const withdrawTotalElement = document.getElementById('withdarw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
// STEP: 5
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;
})