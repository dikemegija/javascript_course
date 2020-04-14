const prompt = require('prompt-sync')();


/*while (true) {
    const expression = prompt('Please enter mathematical expression ');
    console.log(calculate(expression));
}*/
function space(exp) {
    const array = [];
    for (i = 0; i < exp.length; i++) {
        if (exp[i] !== "") {
            array.push(exp[i]);
        }
    }
    return array
}

function calculate(expression) {
    let exp = expression.split(' ');
    const fixedExp = space(exp);

    let first = parseInt(fixedExp[0]);
    let second = parseInt(fixedExp[2]);
    let operation = fixedExp[1];


    if (fixedExp.length !== 3) {
        return "invalid expression!";
    }
    if (isNaN(first) || isNaN(second)) {
        return " Only numbers are allowed in expression! ";
    }


    /*if (operation === "+" ||  "-"|| "*"||"/"){
        console.log()
    } else {
        console.log(exp[1] + "is invalid!!")
    }*/

    switch (operation) {
        case "+":
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
        case "/" :
            return divide(first, second);
        case "%"  :
            return percentage(first, second);
        default:
            //return exp[1] + " is invalid operator! ";
            return "Your operator is invalid!"

    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function percentage(a, b) {
        return a % b;
    }
}

module.exports = calculate;
