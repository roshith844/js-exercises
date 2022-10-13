let array=[];
let temp;
let size = prompt("enter size of Array ")
console.log("Enter values of array")
for(let i = 0; i< size ; i++){
     array[i]= Number(prompt('Enter value'))
}
 //sorts
 for(i = 0; i<size-1; i++){
 for(let j=i+1; j<size; j++){
   if(array[j] > array[i]){
     temp = array[i]
     array[i]= array[j]
     array[j]= temp;
   }
 }
 }
 console.log("the sorted Array is")
 for(i = 0; i< size ; i++){
     console.log(array[i])
}
