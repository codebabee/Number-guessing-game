let userGuess = 2; //prompts the user to pick a number between 1 and userGuess
let counter = 0;
let range = Math.floor(Math.random() * userGuess) + 1;  //generates the random number
let noOfTries = 2

prompt ("What is your username:");
let guess = prompt ("Please pick a number between 1 and " + userGuess);

if (guess === range) {
// prompt ("Please pick a number between 1 and " + userGuess);
  prompt ("good guess!");
  counter += 1;}
else {
  prompt ("try again");
}
//   if (counter ) {
//     prompt ("that was a good guess")
//     counter += 1;
//   }
// }