#!/usr/bin/env node

import inquirer from "inquirer";


const randomNumber=Math.floor(Math.random()* 6+ 1);

const answer= await inquirer.prompt([
     
    {
     name: "userGussedNumber",
     type: "number",
     message: "Please Guess A number between 1-6"

    },

]);

if (answer.userGussedNumber===13) {
    console.log("congratulation! you guessed right number");
    
}else{
    console.log("you gussed wrong number");
    
}
