let ObjOne = {
    name: 'nazim',
    age: 18
}
function showNameAndAge(argument, argument2){
    console.log('Name: '+ this.name + 'and'+ this.age+ 'a random argument: '+ argument+ argument2)
}

showNameAndAge.call(ObjOne, 'something', " something else")

let functionReturned = showNameAndAge.bind(ObjOne, 'something', " something else")
console.log(functionReturned)

showNameAndAge.apply(ObjOne, ['something', " something else"])