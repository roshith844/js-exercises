console.log("Enter The Mark Scored ")
let wTest = Number(prompt("Written Test"))
let LabExam = Number(prompt("Lab Exams"))
let assignment = Number(prompt("Assignments"))

let Total = ((wTest * 70)/100) + ((LabExam * 20)/100) +((assignment * 10)/100)
console.log("Grade of the student is " + Total )
