let mark = prompt("enter mark");
if(Number(mark)>= 50 && Number(mark)<=100){
     console.log("Passed")
}else if(Number(mark)< 50 && Number(mark) >=0){
     console.log("failed")
}else{
     console.log("Invalid! marks should be between 0 and 100")
}