function binarySearch(arr, target){

     // 1. 2. 3   middle  5, 6, 7 
     let startIndex = 0;
     let endIndex = arr.length -1;
     while(startIndex <= endIndex){
          let middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2);
          if(arr[middleIndex] == target){
               return middleIndex;
          }else if( target < arr[middleIndex] ){
       endIndex = middleIndex-1;
          }else{
               startIndex = middleIndex +1;
          }
     }
     return -1;
}
console.log(binarySearch([1, 2,3,4,6,8,9], 6))