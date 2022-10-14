main()
//main()
function main(){
     let size = prompt("Enter size of the array")
     console.log("Enter Values of array 1")
     let array1 = getArray(size)
     console.log("Enter Values of array 2")
     let array2 = getArray(size)
     console.log("sum of array 1 and 2 is :")
     let sum =addArray(array1, array2,size)
     displayArray(sum)
}

function getArray(size){
     //defines array
     let array = new Array(size)
     for (let i = 0; i < size; i++) {
          array[i] = new Array(size)
     }
     // takes input
console.log("enter values to Array : ")
for (let i = 0; i < size; i++) {
     for (let j = 0; j < size; j++) {
          array[i][j] = Number(prompt("enter element"))
     }
}
return array;

}
function addArray(arr1, arr2,size){
     let sum = new Array(size)
     for (let i = 0; i < size; i++) {
          sum[i] = new Array(size)
     }

          for(let i=0; i< size; i++){
               for(let j=0; j<size; j++){
                    sum[i][j]= arr1[i][j] + arr2[i][j]
               }
               
          }
          return sum
}
function displayArray(arr){
    console.log(arr)
}
