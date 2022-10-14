const array = []
const newArray=[]
let size = Number(prompt("Enter array size"))
// takes input
console.log("Enter values of Array")
for(let i = 0; i< size; i++){
    array[i] = prompt("Enter value")
}
for(let i = 0; i< size-1; i++){
     newArray[i] = array[i] * array[i+1]
 }
 console.log(newArray)
