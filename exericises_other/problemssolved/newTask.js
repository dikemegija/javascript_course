/**
 * Задача: если строка
 * Вывести каждую букву в консоль, но если буква гласная, то вывести её большой
 * Например "My name is Pavels" => "MY nAmE Is PAvEls"
 */ 

 /**
  * Функция которая будет проверять является ли буква гласной.
  * Функция возращает true, если letter гласная и false если не гласная
  */
//Дано

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter)
}

const text = "Hello my name is Pavels"
let i;
for (i = 0; i < text.length; i++){
    if (isVowel(text[i])) {
        console.log(text[i].toUpperCase())
    } else {
        console.log(text[i])
    }
    //console.log(text[i])
}