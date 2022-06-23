class Calculator{
    constructor(previousOperand , currentResult){
        this.previousOperand = previousOperand;
        this.currentResult = currentResult;
    }
    clear(currentResult){
        clearAll.addEventListener('click' , function(){
               currentResult.innerHTML.length > 1 ? currentResult.innerHTML = '' : currentResult.innerHTML = undefined;
        })
        
    }    
    delete(previousOperand){
        deleteString.addEventListener("click" , function(){
            console.log("abc");
            currentResult
        })
    }
    appendNumber(){

    }

}


let buttonAll = document.querySelectorAll("[type='button']")
let selectNumber = document.querySelectorAll("[name='number-operand']");
let signOperand = document.querySelectorAll("[name='sign-operand']");
let previousOperand = document.getElementById("resultBefore");
let currentResult = document.getElementById("result");
let clearAll = document.getElementById("clearAll");
let deleteString = document.getElementById("delete_backString");
const calculator = new Calculator(previousOperand , currentResult);

buttonAll.forEach(function (buttonList) {
    buttonList.addEventListener("click" ,function () {
        currentResult.innerHTML = buttonList.value; 
        console.log(currentResult.innerHTML.length); 
        calculator.clear(currentResult);
        calculator.delete(previousOperand);
    })
    
})