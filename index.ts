#!/usr/bin/env node
//shabang

import inquirer from "inquirer";
 
let answer =await inquirer.prompt([

    {message :"Enter first number",type :"number",name:"firstNumer"},
    {message: "Enter second number",type:"number",name:"secondNumber"},
    {
        message : "select one of the operators to perform operation",
        type: "list",
        name:"operator",
        choices:["Addition", "subtraction","multiplication","Devision"],
    },
]);

//conditional statement:
if(answer.operator ==="Addition"){
    console.log(answer.firstNumer + answer.secondNumber);
}else if (answer.operator ==="subtraction"){
    console.log(answer.firstNumer - answer.secondNumber);
}else if ( answer.operator === "multiplication"){
    console.log(answer.firstNumer * answer.secondNumber);

}else if ( answer.operator === "Devision"){
    console.log(answer.firstNumer / answer.secondNumber);

}else {
    console.log("please select the valid number");
}