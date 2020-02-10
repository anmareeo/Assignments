
// class Cars {
//     constructor() {
//         this._type = null
       
//     }
//     get type() {
//         return this._type
       
//     }

//     set type(newValue) {
//         this._type = newValue
//     } 
// }


class Animal {
    constructor() {
    }
   speak() {console.log( this._sound)}
   
    sayName() {console.log (this._name)}
   
       
    get name() {
        return this._name
    }

    set name(newValue) {
        this._name = newValue
    } 
}

class Dog extends Animal {
    constructor (sound, name){
        super()
        this._name = name
        this._sound = sound
        
    }
}



  


let myDog = new Dog("whine", "Bubba")

console.log(myDog)
myDog.speak()
myDog.name = "Flotsam"
myDog.sayName()