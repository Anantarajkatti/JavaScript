//add Script
{
  /* <script>
    //write  JS scriprts in it
</script> */
}
//You can place any number of scripts in an HTML document.
//<script> in <head>:....Used for scripts that need to be loaded before the page content (e.g., analytics, third-party libraries, global configurations).
//<script> in <body> (Before Closing </body>):==Recommended for scripts that manipulate the DOM

//JavaScript Display Possibilities
// document.innerHTML=
// document.write()
// window.alert()
// console.log()

//Using document.write() after an HTML document is loaded, will delete all existing HTML:
//The document.write() method should only be used for testing.

// varibles : are containers for storing Data
// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

//identifiers : variableNames are called as identifiers

// var redeclaration works // but "let" throws an error
// carName="swift"
// var carName

// let x = '5' + 2 + 3;
// console.log(x) //523  it executes step by step String+num= String 52, '52'+3= 523
// // addtitionally this executes based on BODMAS rules
// let a= '5'+2/2
// console.log(a) //51

// console.log('5'/2+2 ) //2.5+2= 4.5
// console.log(typeof('5'/2+2))// number
// console.log('5'-2+2)//5
// console.log(typeof('5'-2+2)) //number

//{data && <div>hi</div>}
//If data is truthy (e.g., a non-empty string, a non-zero number, an object, an array, true), React will render <div>hi</div>.
//If data is falsy (null, undefined, 0, false, NaN, or an empty string ""), React will render nothing (it won’t show the <div>).

// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:

// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

//   "new" keyword
//

//used to create an instance of object
//step 1- new initiates empty object
//2: it sets prototype of this object to prototype of function
//3:  hinds this inside constructor to the new object
//4 : return new object unless constructor return diffrent object

//    "this" keyword------------------------------------------------------------------------------------------------------------

//this refers to the object that is executing the function. The value of this depends on how and where the function is called.

//this in the Global Scope :===
// global scope refers to the global object (window in browsers, global in Node.js).
// console.log(this);  //// In a browser, it logs the `window` object

//inside regular function :--- global object
//    function show() {
//     console.log(this); // Global object (window in browsers)
// }
// show();

// Inside an Object Method
// //this refers to the object it belongs to.
// const user = {
//     name: "Alice",
//     greet: function() {
//         console.log(this.name);
//     }
// };

// user.greet(); // Output: Alice

// Inside a Constructor Function :-  this refers to the newly created object.

// function Car(brand) {
//     this.brand = brand;
// }

// const myCar = new Car("Toyota");
// console.log(myCar.brand); // Output: Toyota

//Inside an Arrow Function
//Arrow functions don’t have their own this. Instead, they inherit this from their surrounding scope.
// const person = {
//     name: "Alice",
//     greet: function() {
//         const sayHello = () => {
//             console.log(this.name); // Inherits `this` from `greet()`
//         };
//         sayHello();
//     }
// };

// person.greet(); // Output: Alice

//function-------------------------------------------------------------------------------------------------------------------------------------------------------
//A JavaScript function is a block of code designed to perform a particular task.

// //named function
// function greet() {}
// greet()

// //anonymous function -- cannot be hoisted function declaration
// const greet=function(){}
// greet()

// //arraow function---- concised syntax, doesn't have its own "this"(inherits from surrounding scope)

// const greet=(parameters)=>{}
// greet()

//immediately invoked function -- used to avoid polluting global scope
// (function(){
//     console.log("function executed")
// })()

//callback functions- used for async opearations
// functions passed as argument of another function
// function function1(callback){
//     callback()
// }
// function function2(){}

// function1(function2)

// higherOrder functions-funnctions
// function that takes functions as arguments or returns function
// //Ex:       function opearate(a,b,func){
//                 return func(a,b)
//                 }

//           function multiply(a,b){
//             return a*b
//           }

//           operate(2,3,multiply)

//constructor functions--- to create object
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const abhi = new Person("abhi", "27");

// rest parameter in function
// it specifirs all numerours parameters we give
//functioncall(p1,p2,p3,p4........)
//  function functionName(...args){
//     console.log(args)// is an Array
//  }

//Argument Objects


//Array Methods
const array = [3, 6, 7, 8, 3, 7];

// let string = array.toString();
// console.log(string);

// let string = array.join(">");
// console.log(string);(

//both returns removed element
// let number = array.pop(); //remove at end
// array.shift(); // remove at beginning
// console.log(array, number);

//------------------------------------------------- //Object prototypes---------------------------------------------------------------------------------


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


// ---------------------------------------------Class---------------------------------------------------------------
class Car{
  constructor(name,model,year){
      this.name=name
      this.model=model 
      this.year=year
  }
  fullName(){
      return "car Name is "+ this.name+this.model+this.year
  }
}

class Part extends Car{
  constructor(name,model,year,part){
      super(name,model,year)
      this.part=part
  }
  partName(){
      return this.name+this.part
  }
}

const swift= new Part("swift",'model-1',2025,"silencer")

console.log(swift.fullName())
console.log(swift.partName())
