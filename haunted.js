const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage += 3;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
    
   //console.log("It is dark!..... Will you turn on your flashlight??")
   let turnFlashlight = READLINE.question("It is dark!..... Will you turn on your flashlight?(yes or no) ");


  if(turnFlashlight == "y" || turnFlashlight == "yes"){
    console.log(" You receive 5 points of intellect!")
    console.log("You spot a floating chair!")

    let attack = READLINE.question("Do you want to attack the ghost? (yes or no) ");

    if(attack == "y" || attack == "yes"){
  player.courage += 5;
  console.log("Stays to attack the ghost")
  player.courage += 10;
  player.strength += 10;

    }

    else{//player ran 
    console.log("Lose 1 point of courage!")
    player.courage -= 1;
    console.log("Rush out of the house!")
    }//what does this do

  }
  
    
 // continue the story

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
console.log("You hear a footsteps from the outside of the house. You run inside breathing very heavy!")
console.log("You get spooked by a rat on the ground...... ohhh nooo!!!")
console.log("You yell!")
player.courage -- ;
console.log("You leave running because a ghost appears behind you......please do not catch me!!")





}
console.log("Thanks for playing!");
