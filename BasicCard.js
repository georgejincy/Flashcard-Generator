// dependency for inquirer npm package
var inquirer = require("inquirer");

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