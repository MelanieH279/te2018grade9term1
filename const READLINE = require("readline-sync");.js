const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);
let doing= READLINE.question("How was your day in school today? Good/not so well");
if(doing == "Good") {
	console.log("That's great!");
}
else {
		console.log("Did anything happen at school?");
   let response= READLINE.question("Yes, I did not do so well in school.")
     console.log("Don't worry to much, you can do better next time.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("You should go do your homework.");
}
else {
	console.log("You have to eat because you can't think with an empty stomach!");
}

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question(" You have to do your homework to maintain your good grades! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log(" So when you want something you will have to pay for it!!");

	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log(" What are you doing? Go take a shower!..");
}
else {
	console.log(" That's good! You should go to sleep because you have a test tomorrow.");
}


console.log(`
**************************************************

`);
console.log("Good job! See you next time.");
console.log(`
**************************************************

`);