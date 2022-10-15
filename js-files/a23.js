class Fun{
     constructor(size){  
          this.size= size;
     }
     main(){
          //declare array
          let array = new Array(this.size)
          for(let i=0; i<this.size; i++){
               array[i]= new Array(this.size)
          }
          return array;
          
     }
     getArray(array){

          for(let i = 0; i<this.size ; i++){
               for(let j=0; j<this.size; j++){
                    array[i][j] = Number(prompt("Enter value"))
               }
          }
          return array;
     }
     displayArray(array){
          console.log(array)
     }
}
let size = Number(prompt("Enter size Of The Array"))
let arr = new Fun(size)
    let newarr = arr.main()
 let  arrvalues = arr.getArray(newarr)
 arr.displayArray(arrvalues)