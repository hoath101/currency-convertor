#! /usr/bin/env node
import inquirer from "inquirer"

const currency:any = {
    USD: 1,
    EUR: 0.94,
    CNY: 7.24,
    INR: 83.61,
    RUB: 92.90,
    PKR: 277.95
};

let userAmswer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter from currency",
            type:"list",
            choices:["USD","EUR","CNY","INR","RUB","PKR"]
        },
        {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:["USD","EUR","CNY","INR","RUB","PKR"]
        },
        {
            name:"amount",
            message:"Enter your amount",
            type:"number"
        }
    ]
)

let fromAmount = currency[userAmswer.from]
let toAmount = currency[userAmswer.to]
let amount = userAmswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount.toFixed(2));
