const numbers = [1, 4, 5, 5, 6, 15];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
}

    if (numbers.length > 0) {
    console.log('Average is ' + (sum / numbers.length));
}



function average(...numbers) {
    return numbers
}

