const READLINE = require("readline-sync");

// **** Problem 1: printMessage() ****
// Write a function that prints any message you want.
let message = function (){
	console.log("Hey you, how was your day?! I hope your day was great and don't forget to smile today.")
}
// **** Problem 2: printFiveMessages() ****
// Write a function that calls printMessage() five times.
let message2 = function (){
message();
message();
message();
message();
message();
}
message2();
// **** Problem 3: getUserInput() ****
// Write a function that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on
// what the user decides.
// let message2 = function (){
// 	//console
// }
// **** Problem 4: printGreeting() ****
// Write a function that prints a greeting message to the user.


// **** Problem 5: printClosing() ****
// Write a function that prints a goodbye message to the user.


// **** Problem 6: run() ****
// Write a function that runs the whole program by calling functions in this
// order:
// 1) printGreeting()
// 2) getUserInput()
// 3) printClosing()


// When finished, call your run() function below to run the whole program!
message()