const add = function (firstTerm, secondTerm) { return result = firstTerm + secondTerm;}

const subtract = function (firstTerm, secondTerm) { return result = firstTerm - secondTerm;}

const multiply = function (firstTerm, secondTerm) { return result = firstTerm * secondTerm;}

const divide = function (firstTerm, secondTerm) { return result = firstTerm / secondTerm;}

const percent = function (firstTerm, secondTerm) { return result = (firstTerm / secondTerm) * 100;}

const invert = function (number) { return result =- number;}

let operator, firstTerm, secondTerm;

const operate = function (operator) {
	if (operator === "+") {
		return add(firstTerm, secondTerm);
	} else if (operator === "-") {
		return subtract(firstTerm, secondTerm);
	} else if (operator === "*") {
		return multiply(firstTerm, secondTerm);
	} else if (operator === "/") {
		return divide(firstTerm, secondTerm);
	} else if (operator === "percents") {
		return percent(firstTerm, secondTerm);
	}
}


const output = document.querySelector(".screen");
const lastResult = document.querySelector(".lastResult");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operators button.each");
const clear = document.querySelector('.clear');
const invertbtn = document.querySelector('.invert');
const del = document.querySelector('.del');
const percentage = document.querySelector('.perc');

percentage.addEventListener("click", () => {
	firstTerm = parseFloat(output.textContent);
	operator = "percents";
	lastResult.textContent = firstTerm, operator;
	output.textContent = '';
})

invertbtn.addEventListener("click", () => {
	outputContent = parseFloat(output.textContent)
	output.textContent = output.textContent * -1;
})

del.addEventListener("click", () => {
	output.textContent = output.textContent.slice(0,-1);
})

clear.addEventListener("click", () => {
	output.textContent = "";
})

numbers.forEach((key) =>{
	key.addEventListener("click", () => {
		outputContent = key.textContent;
		output.textContent += outputContent;
	})
})

operators.forEach((key) =>{
	key.addEventListener("click", () => {
		if (key.textContent === "+") {
			firstTerm = parseFloat(output.textContent);
			operator = "+";
			lastResult.textContent = firstTerm, operator;
			output.textContent = '';
		} else if (key.textContent === "-") {
			firstTerm = parseFloat(output.textContent);
			operator = "-";
			lastResult.textContent = firstTerm, operator;
			output.textContent = '';
		} else if (key.textContent === "×") {
			firstTerm = parseFloat(output.textContent);
			operator = "*";
			lastResult.textContent = firstTerm, operator;
			output.textContent = '';
		}  else if (key.textContent === "÷") {
			firstTerm = parseFloat(output.textContent);
			operator = "/";
			lastResult.textContent = firstTerm, operator;
			output.textContent = '';
		} else if (key.textContent === "=") {
			secondTerm = parseFloat(output.textContent);
			lastResult.textContent = `${firstTerm} ${operator} ${secondTerm}`;
			output.textContent = operate(operator).toFixed();
		}
	})
})

