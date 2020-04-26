const express = require('express');
const app = express();

function getHours(date) {
    const hours = date.getHours();
    if (hours < 10) {
        return "0" + hours
    }
    return hours.toString()
}
function getMinutes(date) {
    const minutes = date.getMinutes();
    if (minutes < 10){
        return '0' + minutes
    }
    return minutes.toString();
}
function getSeconds(date) {
    const seconds = date.getSeconds();
    if (seconds < 10){
        return '0' + seconds
    }
    return seconds.toString();
}

function test(req, res) {
    res.send("Hello!");
}
function time(req, res){
    const clock = new Date();
    const time = `${getHours(clock)}:${getMinutes(clock)}:${getSeconds(clock)} DONT STEAL MY TIME YOU LITTLE FLOWER`;
    console.log(req.connection.remoteAddress);
    res.send(time);
}
       //endpoint/path//
app.get('/hello', test);
app.get('/clock', time);

app.listen(3000, function() {console.log("Server is running on port 3000")});