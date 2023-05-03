const arr = [8, 4, 3, 5, 7, 6, 3]
for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j]
        j--
    }

    arr[j + 1] = currentElement
}
console.log(arr)