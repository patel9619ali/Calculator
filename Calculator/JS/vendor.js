class Calculator{
    constructor(previousOperand , currentResult){
        this.previousOperand = previousOperand;
        this.currentResult = currentResult;
    }
    clear(currentResult){
        clearAll.addEventListener('click' , function(){
            currentResult.innerHTML.length > 0 ? currentResult.innerHTML = '' :  currentResult.innerHTML = '';
        })
        
    }    
    delete(currentResult){
        deleteString.addEventListener("click" , function(){
           let firstNumber = currentResult.innerHTML;
        //    firstNumber = firstNumber.substr(0 , firstNumber.length-1);
        //    console.log(firstNumber);
           for (let i = firstNumber; i < firstNumber.length; i--) {
            // if (firstNumber[i] > 0) {
                firstNumber = firstNumber.substr(0 , firstNumber.length-1);
                currentResult.innerHTML =  firstNumber;
            // }
          }
        //    currentResult.innerHTML = firstNumber;
        //    if (currentResult.innerHTML.length > 0) {
            // let secondNumber = currentResult.innerHTML.slice(0 , currentResult.innerHTML.length -1);
            // currentResult.innerHTML =  secondNumber; 
            // console.log(currentResult.innerHTML);
            // console.log("true");
        //    }
        //    else{
        //     console.log("False");
        //     }

        //    currentResult.innerHTML = secondNumber;
        })
    }
    appendNumber(number){
        currentResult.innerHTML = currentResult.innerHTML + number.toString();
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
        calculator.clear(currentResult);
        calculator.delete(currentResult);
    })  
})