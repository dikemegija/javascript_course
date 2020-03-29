const prompt = require('prompt-sync')();


while (true) {
    const expression = prompt('Please enter mathematical expression');
    console.log(expression);
    console.log("OK")
}


function add(a, b) {
    return a + b;
}


function subtract(a , b){
    return a - b;
}



function multiply(a, b){
    return a * b;
}




function divide(a, b) {
    return a / b;
}
