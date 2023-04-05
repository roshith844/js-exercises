function swapArray(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

const arr = [9, 2, 1, 5, 4, 8]
quickSort(arr, 0, arr.length - 1)
function quickSort(arr, startIndex, endIndex) {
    let pivotIndex = startIndex
    let leftIndex = startIndex + 1
    let rightIndex = endIndex

    if (leftIndex >= rightIndex) return arr
    while (leftIndex <= rightIndex) {
        if (arr[leftIndex] > arr[pivotIndex] && arr[rightIndex] < arr[pivotIndex]) {
            swapArray(arr, leftIndex, rightIndex)
            leftIndex++
            rightIndex--
        }
        if (arr[leftIndex] <= arr[pivotIndex]) {
            leftIndex++
        }
        if (arr[rightIndex] >= arr[pivotIndex]) {
            rightIndex--
        }
    }
    
    swapArray(arr, rightIndex, pivotIndex)
    quickSort(arr, startIndex, rightIndex - 1)
    quickSort(arr, rightIndex + 1, endIndex)
}


console.log(arr)