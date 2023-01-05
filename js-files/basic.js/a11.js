let array = []
let count = 0;
//asks size
let size = prompt("Enter size of array")
// inputs values of array
console.log("enter values of array")
for (let i = 0; i < size; i++) {
     array[i]= prompt("Enter Element")
}
//loop to find even number and count
for (i = 0; i < size; i++) {
     if(array[i] % 2 === 0){
          count++;
     }  
}
console.log("Number of even Numbers in the given array is "+ count)