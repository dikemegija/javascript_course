const prompt = require('prompt-sync')();


while (true) {
    const expression = prompt('Please enter mathematical expression ');
    /*console.log(expression.split(" "));*/
    let exp = expression.split(' ');
    /*console.log(exp);
    console.log(exp.length);
   console.log(expression.length);
    console.log(parseInt(expression))
    console.log(typeof expression[1]);*/

    let first = parseInt(exp[0]);
    /*console.log(first);*/
    let second = parseInt(exp[2]);
    /*console.log(second);*/
    let operation = exp[1];


    /* if (isNaN(second)){
         console.log("Invalid number");
     }*/

    if (exp.length !== 3) {
        console.log(" invalid expression! ");
        continue;
    }
    if (isNaN(first) || isNaN(second)) {
        console.log(" Only numbers are allowed in expression! ");
        continue;
    }
    /*if (operation === "+" ||  "-"|| "*"||"/"){
        console.log()
    } else {
        console.log(exp[1] + "is invalid!!")
    }*/

    switch (operation) {
        case "+":
            console.log(add(first, second));
            break;
        case "-":
            console.log(subtract(first, second));
            break;
        case "*":
            console.log(multiply(first, second));
            break;
        case "/" :
            console.log(divide(first, second));
            break;
        default:
            console.log(exp[1] + " is invalid operator! ")
    }
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
