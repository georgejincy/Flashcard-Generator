var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

//Testing and debugging
var firstPresidentBasic = new BasicCard(" Who was the first president of the United States?", "George Washington");
console.log(firstPresidentBasic.front);
console.log(firstPresidentBasic.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText);