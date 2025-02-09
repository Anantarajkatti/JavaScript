// // const object={}
// // console.log(object)

// //What is "this"?
// // this keyword typically refers to the current object the code is being executed in.
// //context of an object method, this refers to the object that the method was called on.

// //create a contructor function for object

// function objConstructor(name){
//     const obj={}
//     obj.name= name;
//     obj.method=function(){
//         console.log(`${this.name} is the name`)
//     }
//     return obj
// }

// const Ram= objConstructor('Ram')
// Ram.method()
// //we have to create an empty object, initialize it, and return it

// //A better way is to use a constructor. A constructor is just a function called using the "new" keyword.
// // here a constructor function acts as an object

// function Person(name){
//     this.name=name;
//     this.method=()=>{
//         console.log(`the name of person is ${this.name}`)
//     }
// }

// const Lakshman= new Person('lakshman')
// Lakshman.method()



//--------Class-----------------------------------


//The constructor in JavaScript is a special method in a class or function that is used for initializing an object.
// It is typically responsible for setting initial values, properties, and any other required setup for objects when they are created


// class Person{
//     constructor(name){
//         this.name= name;
//     }

//     introduceSelf(){
//         console.log(`hi hello! ${this.name}`)
//     }
// }

// const Ram= new Person('Ram')
// Ram.introduceSelf()