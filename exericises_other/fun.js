let someString = 'Aloha my friends, whats up?';
//let reverseString = someString.reverse();
//let splitString = someString.splice(1);
//let shiftString = someString.shift();

let sstring = someString.toString();
let splited = sstring.split("");
let reversed = splited.reverse();
console.log(reversed);
let spliced = reversed.splice(1,2);
console.log(spliced);

let anotherstring = [4,5,6,7,8,9,10,11];
let numbersstring = anotherstring.join(" + oranges ");
console.log(numbersstring);

let text = ['a','b','c','d','e'];//if i write last index to find who is poped its shows -1
console.log(text.pop());
console.log(text);
const text1 = text.lastIndexOf('d');
console.log(text1);

let days = ['Tuesday','Monday','Wednesday'];
let sorteddays = days.sort();
console.log(sorteddays);
const name = 'kisjhf'
console.log(`hello ${name}`)