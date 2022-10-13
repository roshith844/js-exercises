let string = prompt("Enter a string")
let len = string.length
let halflen= Math.floor(len / 2)
//cuts string into two parts 
let firsthalf = string.slice(0, halflen)
let secondhalf = string.slice((len-halflen))
let revsecondhalf = secondhalf.split("").reverse().join("")
//compares string
if(firsthalf === revsecondhalf){
     console.log("Entered string is Palindrome")
}else{
     console.log("Entered string is Not a Palindrome")
}