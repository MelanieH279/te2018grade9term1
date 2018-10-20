function character(name){

	this.name = name;
	this.quirk;
	this.hero = false;
	this.getInfo = getCharacter;

}

function getCharacter(){

return this.name + " " + this.quirk + " " + this.hero; 
}

var midoriya = new character("Midoriya Izuku,")
midoriya.quirk = "One for All,"
midoriya.hero = true;

var todoroki = new character("Todoroki Shoto,")
todoroki.quirk = "Half Hot Half Cold,"
todoroki.hero = true;

var dabi = new character("Dabi,")
dabi.quirk = "Cremation,"
dabi.hero = false;


console.log(midoriya.getInfo());
console.log(todoroki.getInfo());
console.log(dabi.getInfo());