let mark = prompt("Enter total Mark percentage");
mark = Number(mark);
if (mark > 100 || mark < 0) {
     console.log("invalid! Mark percentage should be between 0 and 100");
}else if(mark >= 90){
     console.log(" A ")
}
else if(mark >= 80){
     console.log(" B ")
}
else if(mark >= 70){
     console.log(" C ")
}
else if(mark >= 60){
     console.log(" D ")
}
else if(mark >= 50){
     console.log(" E ")
}else{
     console.log("failed")
}