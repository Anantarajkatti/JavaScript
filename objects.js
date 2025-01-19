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

// //Object prototypes
// //Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

// const myObject={
//     city:'madrid',
//     greet(){
//         console.log(`welcome to ${this.city}`)
//     }
// }

// Object.getPrototypeOf(myObject)

//every object has prototype. if the property is not found in object its is serched in its prototype--- the search goes on in chain 
// this is called as "prototype chain"

// const myDate = new Date();
// let object = myDate;

// do{
//      object = Object.getPrototypeOf(object)
//     console.log(object)
// }while(object)



///This code creates a Date object, then walks up the prototype chain, logging the prototypes. 
//It shows us that the prototype of myDate is a Date.prototype object, and the prototype of that is Object.prototype.

// "shadowing" the property.:---- if defined property name is already present in prototype then --newly defined propery is executed.

//----Setting Prototype--------

// const personPrototype={
//     greet(){
//         console.log('hello how are you')
//     }
// }

// const carl= Object.create(personPrototype)
// carl.greet()// here we are setting the one object as the prototype for another object

// carl.name="carl" //  o/p: { name: 'carl' }
// console.log(Object.getPrototypeOf(carl)) // o/p: { greet: [Function: greet] }

// object oriented concepts

//abstraction

//inheritance
//one class acts as parent to one or more class and they are child of that class. they inherit all the proprties and methods from parent.

//polymorphism
//a method of parent class defined with same name but different behaviour in child classes is called polymorphism

//encapsulation
// Keeping an object's internal state private, 
//and generally making a clear division between its public interface and its private internal state, is called encapsulation.
// it creates a kind of firewall between this object and the rest of the system.


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