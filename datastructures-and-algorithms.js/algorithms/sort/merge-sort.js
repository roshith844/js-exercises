function mergeSort(array) {
    // Base case
    if (array.length < 2) {
        return array;
    }

    // Divide the array into two halves
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Recursively sort each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the two sorted halves
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            mergedArray.push(sortedLeft[leftIndex])
            leftIndex++;
        } else {
            mergedArray.push(sortedRight[rightIndex])
            rightIndex++;
        }
    }

    return mergedArray.concat(sortedLeft.slice(leftIndex)).concat(sortedRight.slice(rightIndex));
}




console.log(mergeSort([100, 34, 32, 63, 32, 12, 10]))



