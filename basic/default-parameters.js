// The default parameter is a way to set default values for function parameters a value is no passed
// in (ie. it is undefined).
// In a function, Ii a parameter is not provided, then its value becomes undefined. In this case,
// the default value that we specify is applied by the compiler.

function welcomeUser(name = 'guest'){
    console.log(`welcome ${name}`)
}

welcomeUser()