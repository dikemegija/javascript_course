const input = "3   + 3";
const array =[];
let sliced = input.split(' ');
//const spliced = sliced.splice("3")
//console.log(spliced)

for (i = 0; i < sliced.length; i++){
    if ( sliced[i] !== ""){
        array.push(sliced[i]);
    }
}

console.log(sliced)

console.log(array)