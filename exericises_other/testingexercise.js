// Initialize function to test if a number is even
const isEven = x => {
    // If the remainder after dividing by two is 0, return true
    if (x % 2 === 0) {
        console.log("odjsv");
    }
    // If the number is odd, return false
    return false;
}

// Test the number
isEven(12);
/////////////////////////////////


function isEven(number){
    if (number / 2){
        return true
    } else {}
    return false
}
function isOdd(number){
    if (number - 1) {
        return true
    } else {
        return false
    }
}
console.log(isOdd(7));

console.log(isEven(14));
////////////////////////////

function divide (a,b){
    return a / b;
}
function minus (a,b){
    return a - b;
}