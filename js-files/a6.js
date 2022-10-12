let num = prompt("Enter a Number")
if(isNaN(Number(num))){
     console.log("invalid! Both Values should be a Number")
}else{
     num = Number(num)
     switch(num){
case 1: 
console.log("Sunday")
break;
case 2: 
console.log("Monday")
break;
case 3: 
console.log("Tuesday")
break;
case 4: 
console.log("wednesday")
break;
case 5: 
console.log("Thursday")
break;
case 6: 
console.log("Friday")
break;
case 7: 
console.log("Saturday")
break;
default: 
console.log("invalid Entry")
     }
}

