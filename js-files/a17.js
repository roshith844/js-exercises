const num1 = Number(prompt("Enter a Number"))
const num2 = Number(prompt("Enter Another Number"))
let choice = Number(prompt("Enter Your choice : 1. addition 2. substraction 3. multiplication 4. division"))
if(choice < 1 || choice > 4 ){
     console.log("Invalid Entry")
}else if(choice === 1){
     addition(num1, num2)
}else if(choice === 2){
     subtraction(num1, num2)
}else if(choice === 3){
     multiplication(num1, num2)
}else if(choice === 4){
     division(num1, num2)
}

function addition(num1, num2){
     console.log(num1 + num2)
}
function subtraction(num1, num2){
    console.log(num1 - num2)
}
function multiplication(num1, num2) {
     console.log (num1 + num2)
}
function division(num1, num2) {
     console.log(num1 / num2)
}
