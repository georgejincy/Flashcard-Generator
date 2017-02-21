// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for fs
var fs = require('fs');
var quizClozeObj;
//variable to store score details
var score = 0;
//variable we will use to count how many times the questions have to be asked
var count = 0;

//ClozeCard constructor
var ClozeCard = function(text, cloze){
	//Proceed with Cloze card creation only if cloze deletion appears in text
	if(text.indexOf(cloze) === -1){
		return console.log("Error!." + cloze + " doesn't appear in text " + text);
	}
	if(this instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
		this.partial = this.fullText.replace(this.cloze, '...');
		//console.log("New cloze card created. Partial is" + this.partial);
	}else{
		return new ClozeCard(text, cloze);
	}
};

module.exports = ClozeCard;

//Read cloze.json and get the quizObject
fs.readFile('cloze.json', 'utf8', function(err, data){
	if(err) {
        return console.log(err);
    }
    console.log(data);
    //convert to object
    quizClozeObj = JSON.parse(data);

    console.log(quizClozeObj.ques.length);

    // call askQuestion to playgame if Read file is success
	askQuestion();
});

var askQuestion = function(){
	//if statement that ensures we ask only the questions in the quizClozeObject
	if(count < quizClozeObj.ques.length){
		inquirer.prompt([
  		{
		    type: 'input',
		    message: quizClozeObj.ques[count].partial,
		    name: 'userAns'
		 }
		]).then(function (answers) {
		 console.log(answers.userAns);
		 //validate userAnswer
		 if(answers.userAns.toLowerCase() === quizClozeObj.ques[count].cloze.toLowerCase()){
		 	console.log("You are correct!.");
		 	score++;
		 }else{
		 	console.log("Incorrect!." );
		 }
		 console.log(quizClozeObj.ques[count].fullText + "\n");
		 // add one to count to increment our recursive loop by one
      	  count++;
	      // run the askquestion function again so as to either end the loop or ask the questions again
	      askQuestion();
		});


	}
	//else statement which will output the final score for the game
	else{
		console.log("Game Over!\nYour score is: "+ score);
		//Do you want to play again?
		inquirer.prompt([{
    		type: 'confirm',
    		name: 'doPlayAgain',
    		message: 'Do you want to play again?',
    		default: false
  		}]).then(function(answers) {
  			console.log(answers.doPlayAgain);
  			if(answers.doPlayAgain === true){
	  			//reset count and score and call askQuestion
	  			count = 0;
	  			score = 0;
	  			askQuestion();
  			}else{ 
  				console.log("See you later!");
  			}
		});
	}

}