const READLINE = require("readline-sync");

console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = true;

if (age >= 18 || withAdult){

console.log("Watch movie")

}else{

console.log("You need an adult.")

}





console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");

//let rain = true;

if (raining == "yes" && thunderstorming == "no"){

console.log("Bring an umbrella!")

}
	
else{

	console.log("Do not bring umbrella, it is bad luck.")


}



console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");

if (Bubbles = "yes" && Spankey == "no"){

	console.log("Bubbles is smiling")
}
else{

	console.log("Spankey is not smiling")


























