const num1 = Number(prompt("Enter a Number"))
const num2 = Number(prompt("Enter Another Number"))
let choice = Number(prompt("Enter Your choice : 1. addition 2. substraction 3. multiplication 4. division"))
class Operations {
     constructor(num1, num2) {
          this.num1 = num1
          this.num2 = num2
     }
     addition() {
          console.log(this.num1 + this.num2)
     }
     subtraction() {
          console.log(this.num1 - this.num2)
     }
     multiplication() {
          console.log(this.num1 + this.num2)
     }
     division() {
          console.log(this.num1 / this.num2)
     }

}
let operation = new Operations(num1, num2)
if (choice < 1 || choice > 4) {
     console.log("Invalid Entry")
} else if (choice === 1) {
     operation.addition()
} else if (choice === 2) {
     operation.subtraction()
} else if (choice === 3) {
     operation.multiplication()
} else if (choice === 4) {
     operation.division()
}




