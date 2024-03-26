#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\n***********************Number_Guessing_Game_by_sirgkhan*********************\n\n");
const generatedNumber = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([
    { name: "userNumber", type: "number", message: "Enter any Guessed Number from 1 to 10" },
]);
if (answer.userNumber >= 0 && answer.userNumber <= 10) {
    if (generatedNumber == answer.userNumber) {
        console.log("Yahooo! your guess is perfect");
    }
    else {
        console.log("Alas! sorry your guess is missed try again");
    }
}
else {
    console.log("Error! your guessed number must be between the given limits 0 to 10");
}
