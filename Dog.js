const READLINE = require("readline-sync")
let dog = {
	name: "Sammy",
	numLegs: 4,
	color: "Brown",
	breed: "Golden Retriever",
	bark: function(){
		console.log("Bark!");
	},
sayName: function(){
	console.log(`My name is ${this.name}!`);

},
eat: function (food){
	if (food === "Chicken"){
		console.log("Tasty");
	}
	else{
		console.log (`Pass! ${this.name} doesn't eat ${food}s!`)
	}




	}

	dog.sayName();