const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".del");
const equalsButton = document.querySelector(".equals");
const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");


let previousOperand = "", currentOperand = "", operator = undefined;


numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        appendNumber(numberButton.innerText);
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        appendOperator(operatorButton.innerText);
    });
});


function appendNumber(number){
    if (number === "." && currentOperand.includes(number)) return
    currentOperand += number;
    updateScreen();
}

function appendOperator(operaParam){
    if (!currentOperand) return
    previousOperand = currentOperand;
    operator = operaParam;
    currentOperand = "";

    updateScreen();
}

function calculateFunc(){
    let answer;

    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);

    if (operator === "+") {
        answer = previousOperand + currentOperand;
    } else if(operator === "-") {
        answer = previousOperand - currentOperand;
    } else if (operator === "×"){
        answer = previousOperand * currentOperand;
    } else if (operator === "÷"){
        answer = previousOperand / currentOperand;
    } else if (operator === "%"){
        answer = previousOperand / currentOperand;
    }

    clearFunc();
    currentOperand = answer.toString();
    updateScreen();
}

function updateScreen(){
    if (operator !== undefined) {
        firstScreen.innerText = `${previousOperand} ${operator}`;
    } else{
        firstScreen.innerText = `${previousOperand}`;
    }

    secondScreen.innerText = currentOperand
}


function clearFunc(){
    currentOperand = "";
    previousOperand = "";
    operator = undefined;
    updateScreen();
}

function deleteFunc(){
    currentOperand = currentOperand.slice(0, -1);
    updateScreen();
}



clearButton.addEventListener("click", clearFunc);
deleteButton.addEventListener("click", deleteFunc);
equalsButton.addEventListener("click", calculateFunc);