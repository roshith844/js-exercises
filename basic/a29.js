// defines callback function
function callback(...myArray){ 
     let sum = 0;
         for(let i = 0; i< arguments.length; i++){
            sum += arguments[i]
         }
          if(sum%2== 0){
               console.log("even")
               return true;
          }else{
               console.log("odd")
               return false
          }
     }
     // defines myFilter
function myFilter(myArray, callback){
     callback(...myArray)
     let sum = 0;
     for(let i=0; i< myArray.length; i++){
          sum+= myArray[i]
     }
     return sum;
}
let array = [1,2,3,4,5]
console.log(myFilter(array,callback))

