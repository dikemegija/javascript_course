

const opn = require("opn");

let webSite = ["https://www.youtube.com/watch?v=AJSRjtmdQxM","https://www.facebook.com/", "https://www.draugiem.lv/?login=0","https://vk.com/", "https://www.worldometers.info/coronavirus/?utm_campaign=homeAdvegas1?","http://localhost:63342/exericises_other/exericises%20home/problemssolved/random.html?_ijt=ih9cjueqeg5l2siecgi7u8j1mf"];
let ramdomSite = webSite[Math.floor(Math.random() * webSite.length)];


console.log(ramdomSite);


opn(ramdomSite)
