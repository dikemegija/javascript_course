/**
 * Пользователь вводит 2 числа, нужно вывести на экран одно из 2 взависимости от
 * того, какое число больше
 * 1: Число (1) больше чем число (2)
 * 2: Число (2) больше чем число (1)
 */

let first = parseInt(firstNumbers)
let second = parseInt(secondNumbers)



if (first > second){
    console.log(first, 'is bigger than', second)
}
if (first < second){
    console.log(second, 'is bigger than', first)
}
if (first == second){
    console.log(first, 'is equal to', second)
}

//if (firstNumbers > secondNumbers) {
   // console.log(firstNumbers, 'is bigger than' , secondNumbers)
//}
//if (secondNumbers > firstNumbers){
  //  console.log(secondNumbers, 'is bigger than', firstNumbers)
//}
//if (firstNumbers == secondNumbers){
   // console.log(secondNumbers,'is equal to', firstNumbers)
//}