main()
//main()
function main(){
     let size = prompt("Enter size of the array")
     console.log("Enter Values of array 1")
     let array1 = getArray(size)
     console.log("Enter Values of array 2")
     let array2 = getArray(size) 
     console.log("sum of array 1 and 2 is :")
     let sum =addArray(array1, array2)
     displayArray(sum)
}
function getArray(size){
     array= []
     for(let i=0; i<size ; i++){
          array[i]= prompt("Enter Value")
     }
     return array;
}
function addArray(arr1, arr2){
          sum=[]
          for(let i=0; i< size; i++){
               sum[i]= arr1[i] + arr2[i]
          }
          return sum
}
function displayArray(arr){
    console.log(arr)
}
