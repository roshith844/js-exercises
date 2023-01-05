const pro = new promise((resolve, reject)=>{
     if(!validateCart(cart)){
          const err = new Error('not valid')
          reject(err)
     }else{
          resolve(cart)
     }
})