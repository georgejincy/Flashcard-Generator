// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for fs
var fs = require('fs');
var quizBasicObj;
//variable to store score details
var score = 0;
//variable we will use to count how many times the questions have to be asked
var count = 0;


//BasicCard constructor
var BasicCard = function(front, back){
	//Scope safe constructors
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}else{
		return new BasicCard(front,back);
	}
	
};

module.exports = BasicCard;

//Read basic.json and get the quizObject
fs.readFile('basic.json', 'utf8', function(err, data){
	if(err) {
        return console.log(err);
    }
    console.log(data);
    //convert to object
    quizBasicObj = JSON.parse(data);

    console.log(quizBasicObj.ques.length);

    // call askQuestion to playgame if Read file is success
	askQuestion();
});

var askQuestion = function(){
	//if statement that ensures we ask only the questions in the quizBasicObj
	if(count < quizBasicObj.ques.length){
		inquirer.prompt([
  		{
		    type: 'input',
		    message: quizBasicObj.ques[count].front,
		    name: 'userAns'
		 }
		]).then(function (answers) {
		 console.log(answers.userAns);
		 //validate userAnswer
		 if(answers.userAns.toLowerCase() === quizBasicObj.ques[count].back.toLowerCase()){
		 	console.log("You are correct!. \n" + "The correct answer is " + quizBasicObj.ques[count].back);
		 	score++;
		 }else{
		 	console.log("Incorrect!. \n" + "The correct answer is " + quizBasicObj.ques[count].back);
		 }
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

