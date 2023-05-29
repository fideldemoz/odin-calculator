const add = function (firstTerm, secondTerm) { return result = firstTerm + secondTerm;}
const subtract = function (firstTerm, secondTerm) { return result = firstTerm - secondTerm;}
const multiply = function (firstTerm, secondTerm) { return result = firstTerm * secondTerm;}
const divide = function (firstTerm, secondTerm) { return result = firstTerm / secondTerm;}
const percent = function (firstTerm, secondTerm) { return result = (firstTerm / secondTerm) * 100;}
const invert = function (number) { return result =- number;}
const transE = function (key) {
			key.classList.add('clicked');
			key.addEventListener('transitionend', () => {
			key.classList.remove('clicked');
		})}
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
const op = document.querySelector(".op");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operators button.each");
const clear = document.querySelector('.clear');
const invertbtn = document.querySelector('.invert');
const del = document.querySelector('.del');
const percentage = document.querySelector('.perc');
const equal = document.querySelector('.equal');
const plusbtn = document.querySelector('.plus');
const minusbtn = document.querySelector('.minus');
const dividebtn = document.querySelector('.divide');
const timesbtn = document.querySelector('.times');
const clearFn = function () {
	output.textContent = "";
	lastResult.textContent = "";
	op.textContent = "";
}
const percentageFn = function () {
	firstTerm = parseFloat(output.textContent);
	operator = "percents";
	lastResult.textContent = firstTerm, operator;
	output.textContent = '';
}
const invertbtnFn = function () {
	outputContent = parseFloat(output.textContent)
	output.textContent = output.textContent * -1;
}
const delFn = function () {
	output.textContent = output.textContent.slice(0,-1);
}
const equalFn = function () {
	op.textContent = "";
	secondTerm = parseFloat(output.textContent);
	lastResult.textContent = `${firstTerm} ${operator} ${secondTerm}`;
	let result =(operate(operator) * 10) /10;
	if (result.toString().length > 3) {
		result = (result/10) * 10;
		output.textContent = result;
	}
	if (operator === 'percents') {
		result = `${result} %`;
	}
	output.textContent = result;
	if (output.textContent.length > 15) {
		output.textContent = result.toFixed(2);
		if (output.textContent.length > 15) {
			output.textContent = "Too large"
		}
	}
}
const doMath = (sign) => {
	op.textContent = sign;
	firstTerm = parseFloat(output.textContent);
	operator = sign;
	lastResult.textContent = firstTerm, operator;
	output.textContent = '';
}
const addDigits = function (key) {
	if (key.textContent == "." && output.textContent.includes(".")) {
		return
	} else {
	 	outputContent = key.textContent;
		output.textContent += outputContent;
	}
}
const instructions = document.querySelector(".none")
const xpandBtn = document.querySelector(".expand")
xpandBtn.addEventListener("click", () => {
	if (instructions.classList.contains("none")) {
		xpandBtn.textContent = "Hide instructions"
		instructions.classList.remove("none")
		instructions.classList.add("label")
	} else {
		xpandBtn.textContent = "Show instructions"
		instructions.classList.add("none")
	}
})
del.addEventListener("click", delFn)
invertbtn.addEventListener("click", invertbtnFn)
percentage.addEventListener("click", percentageFn)
clear.addEventListener("click", clearFn)

numbers.forEach((key) => {
	key.addEventListener("click", () => {
		if (output.textContent.length  <= 12) {
			addDigits(key)
		}})})

if (output.textContent.length >= 0 && output.textContent.length < 12) {
	operators.forEach((key) =>{
	key.addEventListener("click", () => {
		if (key.textContent === "+") {
			doMath("+");
		} else if (key.textContent === "-") {
			doMath("-");
		} else if (key.textContent === "×") {
			doMath("*")
		}  else if (key.textContent === "÷") {
			doMath("/")
		} else if (key.textContent === "=") {
				equalFn()
		}})})}

const each = document.querySelectorAll('.each');
each.forEach( (key) => {
	key.addEventListener("click", () => {
	transE(key)
	})});

function start(event) {
	const btn = document.querySelector(`button[data-key="${event.key}"]`)
	
	numbers.forEach((bt) =>{
		if (event.key === bt.textContent) {
			transE(btn)
			if (output.textContent.length  <= 12) {
			addDigits(bt)
	}}})
		
	if (event.key == "Backspace") {
		transE(del)
		delFn();
	}
	if (event.key == "Escape") { transE(clear); clearFn()}
	if (event.key === 	"=" || event.key === 	"Enter") { transE(equal); equalFn()}
	if (event.key == "+") { transE(plusbtn); doMath("+")}
	if (event.key == "-") { transE(minusbtn); doMath("-")}
	if (event.key == "/") { transE(dividebtn); doMath("/")}
	if (event.key == "*") { transE(timesbtn); doMath("*")}
	if (event.key == " ") { transE(invertbtn); invertbtnFn()}
	if (event.key == "%") { transE(percentage); percentageFn()}
}
window.addEventListener('keydown', start);