const arr = [1, 2, 3, 4]
const arrayLength = arr.length;
for (let i = 0; i < Math.floor(arrayLength/ 2); i++) {
  let temp = arr[i];
  arr[i] = arr[(arrayLength - i) - 1]; 
  arr[arrayLength - i - 1] = temp;
}
console.log(arr)

