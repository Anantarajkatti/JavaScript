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

//create an instance of object
//step 1- new initiates empty object
//2: it sets prototype of this object to prototype of function
//3:  hinds this inside constructor to the new object
//4 : return new object unless constructor return diffrent object

//    "this" keyword

//

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

//function
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
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const abhi = new Person("abhi", "27");
