let size = Number(prompt("Enter Size of Arrays"))
// defines arrays
let array1 = new Array(size)
for(let i = 0; i<size; i++){
     array1[i]= new Array(size)
}
let array2 = new Array(size)
for(let i = 0; i<size; i++){
     array2[i]= new Array(size)
}
let sum = new Array(size)
for(let i = 0; i<size; i++){
     sum[i]= new Array(size)
}
// takes input
console.log("enter values to Array 1 : ")
for(let i=0; i<size; i++){
     for(let j=0; j<size; j++){
          array1[i][j] = Number(prompt("enter element"))
     }
}

console.log("enter values to Array 2 : ")
for(let i=0; i<size; i++){
     for(let j=0; j<size; j++){
          array2[i][j] = Number(prompt("enter element"))
     }
}

//sum array1 and array2
for(let i=0; i<size; i++){
     for(let j=0; j<size; j++){
          sum[i][j] = array1[i][j] + array2[i][j]
     }
}
//displays sum
console.table(sum)




 
