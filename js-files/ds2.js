// Question :- move input element on last of the array
const input = 6;
const arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];

const arrayLength = arr.length;

for (let i = 0; i < arrayLength; i++) { // t = O(n)
  if (arr[i] == input) {
     for (let j = i; j< arrayLength-1; j++) { // t= O(n)
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
  }
}
console.log(arr);

// time complexity = O(n) * O(n) = O(n^2)
// space complexity = O(1)
