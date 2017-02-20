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
		console.log("New cloze card created. Partial is" + this.partial);
	}else{
		return new ClozeCard(text, cloze);
	}
};


//Testing and debugging
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");