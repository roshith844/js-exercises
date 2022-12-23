// find two elements of an array where the sum is 10
console.log(" method 1");
const arr = [6, 5, 7, 9, 4, 0, 2];
for (let i = 0; i < arr.length; i++) {
  // t= O(n)
  for (let j = i + 1; j < arr.length - 1; j++) {
    // t= O(n)
    if (arr[i] + arr[j] == 10) {
      console.log(arr[i] + " " + arr[j]);
    }
  }
}

// time complexity = O(n^2)
// space compexity = O(1)

// method 2
console.log(" method 2");
const mySet1 = new Set();
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let match = 10 - num;
  if (mySet1.has(match)) {
    console.log(num + " " + match);
  } else {
    mySet1.add(num);
  }
}

// time complexity == O(n)
// space complexity = O(n)
