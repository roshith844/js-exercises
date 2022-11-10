const arr = [1, 2, 3, 4]
const newarr = arr.map((item)=>{
     return item*2;
})
console.log("After map function " +newarr)

const FilteredArr =  arr.filter((item)=>{
     return item%2==0
})
console.log("Filetered array (even)"+FilteredArr)