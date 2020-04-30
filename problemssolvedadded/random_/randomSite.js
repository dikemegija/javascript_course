

const opn = require("opn");

let webSite = ["https://www.youtube.com/watch?v=AJSRjtmdQxM","https://www.facebook.com/", "https://www.draugiem.lv/?login=0","https://vk.com/", "https://www.worldometers.info/coronavirus/?utm_campaign=homeAdvegas1?"];
let randomSite = webSite[Math.floor(Math.random() * webSite.length)];


console.log(randomSite);


opn(randomSite);
