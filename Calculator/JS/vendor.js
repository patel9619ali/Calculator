class Calculator{
    constructor(previousOperand , currentResult){
        this.previousOperand = previousOperand;
        this.currentResult = currentResult;
        this.clear();
    }
    clear(){
        currentResult.setAttribute('value', '');
    }    
}

let selectNumber = document.querySelectorAll("[name='number-operand']");
let signOperand = document.querySelectorAll("[name='sign-operand']");
let previousOperand = document.getElementById("resultBefore");
let currentResult = document.getElementById("result");
let clearAll = document.getElementById("clearAll");


const calculator = new Calculator(previousOperand , currentResult);
console.log(clearAll);

selectNumber.forEach(function(userItem) {
    userItem.addEventListener("click" , function(){
        let valueOfUserItem = userItem.value;
        calculator.clear();
        console.log(valueOfUserItem);
        currentResult.setAttribute('value', valueOfUserItem);
    })
})