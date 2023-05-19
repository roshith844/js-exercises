function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    console.log("Target value not found"); // Optional message
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return binarySearch(array, target, mid + 1, end);
  } else {
    return binarySearch(array, target, start, mid - 1);
  }
}