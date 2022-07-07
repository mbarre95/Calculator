//set variables
const numberBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const opBtns = document.querySelectorAll('.op');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

let displayVal = [];
let calcArr = [];

//set listeners
equalsBtn.addEventListener('click', parseArr);
clearBtn.addEventListener('click', clearAll);

numberBtns.forEach(num => {
    num.addEventListener('click', populateDisplay);
});
opBtns.forEach(operation => {
    operation.addEventListener('click', saveOp);
})

//functions
function populateDisplay() {
    displayVal.push(this.textContent);
    display.textContent = displayVal.join('');
}

function saveOp() {
    if (calcArr.length == 1) { 
        calcArr.push(this.className.split(' ')[1]);
    } else {
        storeNum(); 
        calcArr.push(this.className.split(' ')[1]);
    }
    clearDisplay();
}

function storeNum() {
    calcArr.push(displayVal.join(''));
}

function parseArr() {
    storeNum(); 

    let index = 0;

    while ((index+1) < calcArr.length) {
        let result;
        let op = calcArr[index+1];

        if (op == "add") {
            result = add(calcArr[index], calcArr[index+2]);
        } else if (op == "subtract") {
            result = subtract(calcArr[index], calcArr[index+2]);
        } else if (op == "multiply") {
            result = multiply(calcArr[index], calcArr[index+2]);
        } else if (op == "divide") {
            result = divide(calcArr[index], calcArr[index+2]);
        }
        calcArr[index+2] = result;
        display.textContent = calcArr[index+2]; 
        index = index + 2;
    }
    
    let newCalcArrStart = calcArr[calcArr.length-1];
    calcArr = [];
    calcArr[0] = newCalcArrStart;
}

function clearDisplay() {
    displayVal = [];
    display.textContent = '';
}

function clearAll() {
    clearDisplay();
    calcArr = [];
}

function add(numA, numB) {
    return parseInt(numA) + parseInt(numB);
}

function subtract(numA, numB) {
    return parseInt(numA) - parseInt(numB);
}

function multiply(numA, numB) {
    return parseInt(numA) * parseInt(numB);
}

function divide(numA, numB) {
    return parseInt(numA) / parseInt(numB);
}