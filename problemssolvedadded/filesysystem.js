/**
 * В той же папке где и js файл находиться файл с паролем (password.secret)
 * Пользователь в качестве аргумента передает пароль. Нужно сверить пароль в файле
 * с тем что ввел пользователь и если очень совпадают то написать "Opened"
 */

const fs = require('fs');

const userInput = process.argv[2];
const password = fs.readFileSync('password.secret', 'utf8');

//console.log(password);

if (userInput === password){
    console.log("Opened")
} else {
    console.log("ACCESS DENIED")
}