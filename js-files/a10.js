//accepts array from user 
let arr1 = []
let arr2 = []
let temp;
let limit = prompt(" Enter size of Array")
for (let i = 0; i < limit; i++) {
     arr1[i] = prompt(" Enter element of arr 1 ")
}
for (let i = 0; i < limit; i++) {
     arr2[i] = prompt(" Enter element of arr 2 ")
}

//swaps
for (let i = 0; i < limit; i++) {
     temp = arr1[i]
     arr1[i] = arr2[i]
     arr2[i] = temp;
}

// displays on console
console.log("The 1st array after swap is ")
for (i = 0; i < limit; i++) {
     console.log(arr1[i])
}
console.log("The 2st array after swap is ")
for (i = 0; i < limit; i++) {
     console.log(arr2[i])
}
