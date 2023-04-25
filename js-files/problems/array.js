//1.  Find biggest element on an array
function viewBiggestElementOnArray(inputArray){
    const LAST_ELEMENT_INDEX= inputArray.length-1
    // sort
   for(let j = 0; j < LAST_ELEMENT_INDEX; j++){

    if(inputArray[j] > inputArray[j+1]){
          // swap
          let temp = inputArray[j]
          inputArray[j] = inputArray[j+1]
          inputArray[j+1] = temp
    }
   }

    // show the last element
    console.log(`biggest element is ${inputArray[LAST_ELEMENT_INDEX]}`)
}
viewBiggestElementOnArray([2,8,1,4])

// 2. Find smallest element of An Array
function viewSmallestElementOnArray(inputArray){
    const LAST_ELEMENT_INDEX = inputArray.length -1
    for(let i = 0; i < LAST_ELEMENT_INDEX; i++){
        if(inputArray[i] < inputArray[i+1]){
            let temp = inputArray[i]
            inputArray[i] = inputArray[i+1]
            inputArray[i+1] = temp
        }
    }
    console.log(`smallest Element is ${inputArray[LAST_ELEMENT_INDEX]}`)
}
viewSmallestElementOnArray([2,8,1,4])

// 3. Reverse an Array

function reverseArray(arrayInput){

    for(let i = 0; i<= ((arrayInput.length) / 2)-1; i++){
    
        // swap i to (length - 1)- i
        let temp = arrayInput[i]
        arrayInput[i] = arrayInput[(arrayInput.length-1)-i]
        arrayInput[(arrayInput.length-1)-i] = temp
    }
   return arrayInput;
}
reverseArray([1, 2, 3, 4, 5])

// 4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    // If we reach here, it means that all digits were 9
    digits.unshift(1);
    return digits;
}

console.log(plusOne([8, 8, 9]))
