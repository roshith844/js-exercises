// // Example 1
// const pro = new promise((resolve, reject)=>{
//      if(!validateCart(cart)){
//           const err = new Error('not valid')
//           reject(err)
//      }else{
//           resolve(cart)
//      }
// })

// // Example 2
// function divide(a, b){
//      return new Promise((resolve, reject)=>{
//           if( b == 0){
//                reject("can't divide by zero")
//           }else {
//                resolve(a/b)
//           }
//      })
// }

//
function promiseApiOne(){
 return new Promise((resolve, reject)=>{
    //  reject("this is an error1")
     resolve("this is an succuss1")
 })
}
function promiseApiTwo(){
     return new Promise((resolve, reject)=>{
         resolve("this is an succuss2")
     })
    }

    const result = Promise.any([promiseApiOne(), promiseApiTwo()])
    .then((resolved)=>{
        console.log(resolved)
    })
    .catch((rejected)=>{
        console.log(rejected)
    })
    console.log(result)


