// let x=new String("string")
// let y= new String("string")

// console.log(x==y)

// const object1={
//     name:"first",
//     age: 26
// }

// const object2={
//     age:26,
//     nama:"first"
// }

// console.log(object1[1]===object2[0])

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Kiwi"));

// const array=["string1"]
// const newArray=array.splice(0)

// console.log(newArray)


// const person = ["fname" ,"John" ,"lname:Doe", "age:25"];

// let text = "";
// for (let x of person) {
//  console.log(x)
 
// }
// console.log(text)


// var x
// var y
// console.log(x+y)
// y=20

//constructor function for object

// function Constructor(name,lastname,age){
//     this.name=name
//     this.lastname=lastname
//     this.age=age

// }

// const Ram= new Constructor("ram","chandra",26)
// console.log(Ram.age)0

//getter and setter

// const object1={
//     name:"anant",
//     lastName:"",
//     set fullname(){
//     this.
//     }
// }

// object1.fullname


// const person = {

//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
// //   let fullName = person.fullName.bind(member);

//   console.log(person.fullName.bind(member))

/// classes------------------------------------------------------------------------
// hoisting is not possible in classes- you have to declare it before using it.

// create class and method and accesss it
// class Car{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }

//     getAge(){
//         const date=new Date()
        
//         const age=date.getFullYear()-this.year;
//         return age
//     }
// }

// const ford= new Car("Ford",2014)

// console.log(ford.getAge())


// class inheritence property - is used for properties and methods reusability when you create new class that has same properties as previosly created

//create a sub class and method in it and access it

// class Car{
//     constructor(companyName,country)
//     {
//         this.company=companyName
//         this.country=country
//     }
// }

// class Model extends Car{
//     constructor(companyName,country,model,cc){
//         super(companyName,country) // by calling super () method in subclass we call parent class constructor method
//         this.model=model
//         this.cc=cc
//     }

//     getModel(){
//         return `you have bought new ${this.model} of ${this.company} in ${this.country}`
//     }
// }

// const altroz= new Model("tata","india","altroz",2000)
// console.log(altroz);

// console.log(altroz.getModel());

//getter and setter------------------------------------------------------


// class Car{
//     constructor(name,age,mobileNo)
//     {
//         this.name=name
//         this.age=age
//         this.contact=mobileNo          ///
//         this.city=undefined
//     }

//     set _city(city){   /////   property  name and setter/getter Name should not be Same
       
//        this.city=city
//     }

//     get _city(){
//         return `${this.city}`
//     }
// }

// const fortuner=new Car("fortuner",10,"222-23-3")
// fortuner._city="bengalury"   // parenetheses is not used when calling setter/getter methods

// console.log(fortuner)
// console.log(fortuner._city)

//static method- it is a mthod that is defined and used in and on Class 
// yo cannot use this method on object
//BUT you can send object as parameter to this method

// class Car{
//     constructor(name,model)
//     {
//         this.name=name;
//         this.model=model;
//     }

//    static hello(altroz){
//     return` hello congratulations for ${altroz.model}`
//    }
// }

// const altroz= new Car("tata","altroz")
// console.log(Car.hello(altroz))

//call back--- its is function passed as a parameter to another function

// function functionOne(result1){
//     return(`${result1} and this is function2`)
// }

// function functionTwo(callBack){
//     const result=callBack("hi there")  // call back is function one
//     return  result
// }

// console.log(functionTwo(functionOne)) // hi there and this is function2

// Asynchronous  -- functions running in parellell is Async functions

  //setTimeout( function, delay)

//  setTimeout(()=>{               //When you pass a function as an argument, remember not to use parenthesis.
//     console.log(functionDemo())  //setTimeout(myFunction, 3000)
//   },3000)

//   function functionDemo(){                  
//     return "this is delayed function"
//   }

//   setInterval(()=>{
//     console.log(functionDemo())
//   },3000)

//   function functionDemo(){
//     return "this is delayed function"
//   }

const array=[10,80,30,20]
array.sort()
console.log(array)