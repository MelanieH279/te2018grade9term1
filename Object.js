function character(name){

	this.name = name;
	this.color;
	this.relationship = false;
	this.getInfo = getCharacter;
}

function getCharacter(){

	return this.name +  " " + this.color + " " + this.relationship;
}

var Ashely = new character("Ashely Gonzales");
Ashely.color =  "Aqua";
Ashely.relationship = false;

console.log (Ashely.getInfo());

let Noah = new character ("Noah Centineo");
Noah.color = "Green";
Noah.relationship = false;

let person = {isHungry: true, firstName: "Sophia", gender: "Female", age: 16, eyeColor:"Green"}

console.log(person.firstName + person.age)