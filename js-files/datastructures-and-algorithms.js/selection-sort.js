let arr = [8, 4, 6, 3, 0, 1]
const LENGTH = arr.length
for (let i = 0; i < LENGTH - 1; i++) {
    for (let j = i + 1; j < LENGTH; j++) {
        if (arr[j] < arr[i]) {
            //swap
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)