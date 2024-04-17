#! /usr/bin/env node
import inquirer from "inquirer";
//define the list of currencies and their exchange rates
let exchange_rates = {
    "USD": 1,
    "EUR": 0.9,
    "JPY": 0.75,
    "CAD": 0.75,
    "PKR": 280
    //add more currency and their exchange rates here  
};
//promt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the  currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the  currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert:"
    }
]);
// perform currency conversion by using formulac
let from__amount = exchange_rates[user_answer.from_currency];
let to__amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from__amount;
let converted_amount = base_amount * to__amount;
//display the cconverted amount =${converted_amount}`);
console.log(`converted amount= ${converted_amount}`);
