//sum of all odd numbers
let limit = prompt("Enter a limit")
let sum = 0;
for(let i=1; i<=limit ; i++){
     if(i % 2 !== 0){
    sum = sum + i
     }
}
console.log("the sum is : " + sum)