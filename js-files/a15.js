let size = prompt("Enter size of the array")
main(size)
//main function
function main(size) {
     let array = new Array(size)

     array = getArray(array, size)

     displayArray(array, size)
}
//adds elements to arrays from user
function getArray(array, size) {
     console.log("enter array elements")
     for (i = 0; i < size; i++) {
          array[i] = prompt("enter array element")
     }
     return array;
}
//displays array
function displayArray(array, size) {
     console.log(array)
}
