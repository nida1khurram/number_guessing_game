#! /usr/bin/env node

import inquirer from "inquirer";
// computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1) ;
//user input for guessing number
const answer = await inquirer.prompt([{
    name : "userGuessNumber",
    type : "number",
    message: "please guess a number (1 to 6) ",
},
]);
if(answer.userGuessNumber === randomNumber){
    console.log("congratulation! you guessed right number");
}else{
    console.log("you guessed a wrong number");
    
}