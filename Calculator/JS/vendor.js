class Calculator{
    constructor(previousOperand , currentResult){
        this.previousOperand = previousOperand;
        this.currentResult = currentResult;
    }
    clear(currentResult){
            currentResult.innerHTML.length > 0 ? currentResult.innerHTML = '' :  currentResult.innerHTML = '';
    }    
    delete(currentResulting){
        currentResult.innerHTML = currentResulting.slice(0, -1);
    }
    appendNumber(number){
        currentResult.innerHTML = currentResult.innerHTML + number.toString();
    }
    operation(operand){
        let computation;
        // let current = currentResult.innerHTML;
        // let prev = previousOperand.innerHTML;
        // console.log(current);
        // prev == current;
        // previousOperand.innerHTML =  currentResult.innerHTML;
        switch (operand) {
        case '+':
            previousOperand.innerHTML =  currentResult.innerHTML + previousOperand.innerHTML;
            currentResult.innerHTML = "";
            break
        case '-':
            // computation = prev - current
            break
        case '*':
            // computation = prev * current
            break
        case '÷':
            // computation = prev / current
            break
        default:
            return
        }
        
        // currentResult.innerHTML = computation;
    }
}


let buttonAll = document.querySelectorAll(".numberList");
let selectNumber = document.querySelectorAll("[name='number-operand']");
let signOperand = document.querySelectorAll("[name='sign-operand']");
let previousOperand = document.getElementById("resultBefore");
let currentResult = document.getElementById("result");
let clearAll = document.getElementById("clearAll");
let deleteString = document.getElementById("delete_backString");
const calculator = new Calculator(previousOperand , currentResult);
buttonAll.forEach(function (buttonList) {
    buttonList.addEventListener("click" ,function () {
        calculator.appendNumber(buttonList.value);
        calculator.operation(buttonList.value);
    })  
})
clearAll.addEventListener('click' , function(){
    calculator.clear(currentResult);
})
deleteString.addEventListener("click" , function(){
    calculator.delete(currentResult.innerHTML);
})