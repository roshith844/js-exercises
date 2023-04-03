const ARRAY = [8999,6 , 434, 34, 90]
const ARRAY_LENGTH = ARRAY.length
// start from 0 - n-1
for (let i = 0; i < ARRAY_LENGTH - 1; i++) {
    for (let j = 0; j < ARRAY_LENGTH - 1-i; j++) {
        if (ARRAY[j] > ARRAY[j + 1]) {
            let temp = ARRAY[j]
            ARRAY[j] = ARRAY[j + 1]
            ARRAY[j+1] = temp
        }
    }
}

console.log(ARRAY)