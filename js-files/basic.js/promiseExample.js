// Example 1
const pro = new promise((resolve, reject)=>{
     if(!validateCart(cart)){
          const err = new Error('not valid')
          reject(err)
     }else{
          resolve(cart)
     }
})

// Example 2
function divide(a, b){
     return new Promise((resolve, reject)=>{
          if( b == 0){
               reject("can't divide by zero")
          }else {
               resolve(a/b)
          }
     })
}

