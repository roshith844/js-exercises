let my_string = Number(1234)
try{
     let revstring = my_string.split().reverse().join()
     console.log(`Reversed string is : ${my_string}`) 
}catch(err){
     console.log(`Error : ${err.message}`)
}finally{
     console.log(`Type of my_string is : ${typeof my_string}`)
}
//sample Input: "1234" Number(1234)
