// 1. given an integer num , repeatedly add its digits untill result has only One digit

let input = 12345

let digits = input.toString().split('').map(Number);
let result = 0
while (true) {
    for (let j = 0; j < digits.length; j++) {
        result += digits[j]
    }

    if (result < 10) {
        console.log(result)
        return
    }

    digits = result.toString().split('').map(Number);
    console.log(digits)
    result = 0
}
