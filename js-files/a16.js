let number = Number(prompt("Enter a number : "))

if(checkPrime(number)){
     console.log("Entered Number is Prime Number")
}else{
     console.log("not a Prime")
}


function checkPrime(number){
         for(let i=2; i < number ; i++){
          if(number%i === 0){
               return false;
          }
         }
         return true;
}