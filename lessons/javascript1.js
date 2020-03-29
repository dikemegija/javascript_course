/*write a javascript programm to check two
numbers and return true if one of the number is 100 or
the sum of numbers is 100
 */

let firstNumber = process.argv[2];
let secondNumber = process.argv[3];
let first = parseInt(firstNumber);
let second = parseInt(secondNumber);

if (first === 100 || second === 100){
    console.log(true)
} else if (first + second === 100){
    console.log(true)
} else {
    console.log(false)
}


/*if (first + second == 100){
    console.log(true)
} else {
    console.log(false)
}

console.log()*/