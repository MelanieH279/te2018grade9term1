
// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  fear: 0,
  weapon: "fists",
  item: "flashlight",
};

let player2 = {
  name: "Ella",
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  fear: 0,
  weapon: "Doll",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "yes" || enterHouse == "no") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log(`${player.name} is greeted by a little girl who hands you ${player.item}.`);
  console.log("A door appears.");
  let enterDoor = READLINE.question("Will you open the door? (yes or no) ");
  if(enterDoor == "yes") {
    player.courage++;
    console.log(" A tea party is happening between twins, they invite you to have some tea...");
    player.charm++;
    console.log(`${player.name} accepts the tea.`); 
    console.log("The twins approach you and smack the tea out of your hands")
    console.log("You react by running past the twins")
    console.log(`${player2.name}`"Speed walks in your direction"
      console.log(`${player2.name}`
  }

    if(enterDoor == "no") {
      console.log(`${player.name} decides to keep walking down the corridor and lands upon a red archway.`);
      console.log("The girl from earlier walks under the archway and disapperars after walking the archway.");
      let walkUnder = READLINE.question("Should we walk under the archway? (yes or no)");
      if(walkUnder == "yes") {}
      if(walkUnder == "no") {}
    }

  }

  // continue the story

 else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  console.log(`${player.name} A man comes out of the house running towards you.`);
    let run =  READLINE.question("What do you want to do? (run or hide)");
    player.courage++;
    if(run = true);
      console.log(`${player.name} decides to run from man,but...`);
      console.log(" The man ends up chasing you back to the front gate of the house.");
    let enterGate = READLINE.question("Will you open the gate? (yes or no) ");
    if(enterGate == "yes") {
      player.courage++;
      console.log(`${player.name} is greeted by twins who take you to a mysterious room.`);
      player.courage++;
      console.log(`${player.name} is taken to room by twins and a table of food awaits.`);
      let food = READLINE.question("Are you going to eat the food? (yes or no) ");
      if(food == "yes") {
        player.intellect++;
        console.log(`${player.name} accepts the food and eats happily.`);
        if(enterGate == "no") {
          player.fear++;
          console.log("The man forces you to enter the house, and drags you to a dark room.");
          console.log("The light suddenly turns on and upon you appears a lady with a bent neck.");
          console.log("The bent neck lady tries to run toward you.");
          console.log("but with no where to run you cower into a wall.");
          player.fear++;
          console.log("The bent neck seems to have sensed your fear and screams loudly.");
          player.fear++;
          console.log(`${player.name} screams for helps, but to no avail.`);
          console.log(`${player.name} seems to have died of fright.`);
          console.log(`${player.name} you have now joined the Haunted house along with the other spirits for eternity.`);
 
        }

      }
    } else {
    console.log("boo")

    }

}
console.log("Thanks for playing!");