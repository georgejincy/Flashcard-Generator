var fs = require('fs');
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var basicQuizObj = {
	ques:[]
};
var clozeQuizObj = {
	ques:[]
};

//Create quiz cards and push them to quiz array
basicQuizObj.ques.push(new BasicCard("By area, what is the smallest country on the planet?", "Vatican City"));
basicQuizObj.ques.push(new BasicCard("What is the name of the tallest uninterrupted waterfall in the world?", "Angel Falls"));
basicQuizObj.ques.push(new BasicCard("What is the largest county in United States?", "San Bernardino"));
basicQuizObj.ques.push(new BasicCard("After Alaska, which US state has the longest coastline?", "Florida"));

console.log(JSON.stringify(basicQuizObj));

clozeQuizObj.ques.push(new ClozeCard("By area, Vatican City is the smallest country on the planet", "Vatican City"));
clozeQuizObj.ques.push(new ClozeCard("Angel Falls is the name of the tallest uninterrupted waterfall in the world", "Angel"));
clozeQuizObj.ques.push(new ClozeCard("San Bernardino is the largest county in United States", "San Bernardino"));
clozeQuizObj.ques.push(new ClozeCard("After Alaska, Florida is the next US state that has the longest coastline", "Florida"));

console.log(JSON.stringify(clozeQuizObj));

//Write basicquizObj to basic.json file and clozequizObject to cloze.json file
fs.writeFile('basic.json', JSON.stringify(basicQuizObj), function(err){
	if(err) {
        return console.log(err);
    }

    console.log("The basic file was saved!");
});

fs.writeFile('cloze.json', JSON.stringify(clozeQuizObj), function(err){
	 if(err) {
        return console.log(err);
    }

    console.log("The cloze file was saved!");
});

//read the json file
fs.readFile('basic.json', 'utf8', function(err, data){
	if(err) {
        return console.log(err);
    }
    console.log(data);
});

fs.readFile('cloze.json', 'utf8', function(err, data){
	if(err) {
        return console.log(err);
    }
    console.log(data);
});



