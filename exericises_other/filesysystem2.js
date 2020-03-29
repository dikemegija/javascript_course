/**
 * Пользователь в качестве аргумента вводит название файла
 * Прочитать весь файл и вывести количество слов в файле
 */
const fs = require('fs');


const userInput = process.argv[2];


const file_words = fs.readFileSync(userInput, 'utf8');

console.log(file_words.split(' ').length);
