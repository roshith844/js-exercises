class anObject {
    key= "value"
   
}

anObject.prototype.something = function(){
    return this.key
}



console.log(Object.getPrototypeOf(anObject))