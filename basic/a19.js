let income = Number(prompt("Enter Anual Income"))
if(income > 1000000){
     console.log("Your Tax amount is :  " + (income * (30/100)))
}else if(income >500000){
     console.log("Your Tax amount " + (income * (20/100)))
}else if(income >250000){
     console.log("Your Tax amount " + (income * (5/100)))
}else{
     console.log("You have No Tax")
}