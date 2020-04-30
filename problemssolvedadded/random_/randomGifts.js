let gifts = ["Watch","Mug","Money","Bubble gum","Rat","Barbie","Wine","Plate","Pizza","Fruits","Nothing"];

let gift = gifts[Math.floor(Math.random() * gifts.length)];
let gift1 = gift.fontcolor("Orange").bold().fontsize(14);

document.write(gift1);