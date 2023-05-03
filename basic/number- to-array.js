let num = 654
let arr = []

while (num > 0) {
    arr.unshift(num % 10)
    num = Math.floor(num / 10)
}

console.log(arr)