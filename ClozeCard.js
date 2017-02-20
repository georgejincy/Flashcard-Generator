//ClozeCard constructor
var ClozeCard = function(text, cloze){
	//Proceed with Cloze card creation only if cloze deletion appears in text
	if(text.indexOf(cloze) === -1){
		return console.log("Error!." + cloze + " doesn't appear in text " + text);
	}
	if(this instanceof ClozeCard){
		this.text = text;
		this.cloze = cloze;
		console.log("New cloze card created")
	}else{
		return new ClozeCard(text, cloze);
	}
};

//Testing and debugging
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "hhhh");