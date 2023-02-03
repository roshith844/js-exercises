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
