// // let sum=1

// // let initialValue=0

// // while(sum<=5){
// //     console.log('i',initialValue)
// //     sum=sum+initialValue
// //     console.log(sum)
// //     initialValue=sum
// // }

// const array =

// for (let i = 0; i < 6; i++) {
//  // Initialize an empty inner array for each row
//   for (let j = 1; j <= 6; j++) {
//     array[i][j - 1] = j % 2 === 0 ? '#' : '*'; // Use j - 1 for correct index
//   }
//   console.log(array[i]); // Print each row
// }

// console.log(array); // Print the entire array

// // var twoSum = function(nums, target) {
// //     const array=[]

// //     for(let i=0;i<nums.length;i++)
// //     {
// //         // console.log(i)
// //         for( let j=0;j<nums.length;j++)
// //         {

// //             if(nums[i]+nums[j]===target && i!=j)
// //             {
// //             array.push([i,j])
// //             }

// //         }

// //     }

// //     return array

// // };

// // const result =twoSum([1,5,7,9,2,4],11)
// // console.log(result)

// var details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

// var countSeniors = function(count,detail) {
//     if(parseInt(detail[11])>=6)
//          return count+1
//     return count

//  };

//  console.log(details.reduce(countSeniors,0))

// const array = [4,2,1,3];
// const target = [1, 2, 3, 4];



// for (let j = 0; j < target.length; j++) {
//      const subArray = [];
//      let k = 0;
//      console.log('target =',target[j])
//      console.log("j =",j)
//   for (let i = j; i <= array.length; i++) {
//     subArray[k] = array[i];
//     console.log("i =",i);
//     if (array[i] === target[j]) {
//       console.log("subArray=", subArray);
//       console.log("reversed array =",subArray.reverse())
//       array.splice(j, subArray.length, ...subArray);
//       console.log("array =",array)
//       break;
//     }
//     else
//     break
//     k++;
//   }
//   console.log("-----------------------------------------------")
  
// }
// console.log("final array", array);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//      console.log(a,b)
//      console.log(a-b)
//      return a - b});

//      console.log(points)

// for(i=1;i<=6;i++)
// {
//      line=""

//      for(j=1;j<=i;j++)
//      {
//           // console.log(j)
//           if(j%2==0)
//                line=line+"*"
//           else
//               line=line+"*"
//      }
//      console.log(line)
// }



// let n=5
// let length=n*2
// let mid=length/2
// for(let i=1;i<=length;i++)
// {
//      let string=""
//   if(i<=length/2)
//   {
//      for(j=1;j<=10;j++)
//           {
//                if(j===mid)
//                {
//                      for(let k=1;k<=i;k++)
                   
//                          {
//                             string=string+"* "
//                          }
//                }
          
//                else
//                {
//                     string=string+" "
//                }
            
               
//           }
//           mid=mid-1
          
//   }
//   else {
//        mid++
//      for(j=1;j<=10;j++)
//           {
//                if(j===mid)
//                {
//                      for(let k=i-n;k<=n;k++)
                   
//                          {
//                             string=string+"* "
//                          }
//                }
          
//                else
//                {
//                     string=string+" "
//                }
            
               
//           }
          
     
//   }
     
//      console.log(string)
// }

// call back function

// function calculation()
// {
//     add(5,5)
// }

// function add(a,b)
// {
//      console.log(a+b)
// }

// setTimeout(()=>{
//      console.log("hi hello")
// }, 3000)


// setTimeout(sayhello,3000)

// function sayhello(){
//      console.log("hi hello")
// }


// Promise

// function function1(){
//      return new Promise((resolve)=>{
//           console.log("promise executing.....")
//           setTimeout(()=>{
//                console.log("executed with delay 2000ms")
//                resolve()
//           },2000)
//      })
// }

// function function2(){
//    console.log("....... now executing chain")
// }

// function1().then(()=>setTimeout(function2,2000)).catch((error)=>console.log(error))


// async function function1(){
//      return "something"
// }

// function1().then((value)=>console.log(value))


// async function functionName(){
//     let addition= await add(5,5)
//     let multiplication= await multiply(addition,5)
//     console.log(multiplication)

// }

// function add(a,b){
//      console.log("adition.....")
//      setTimeout(()=>a+b,2000)}

// function multiply(a,b){
//      console.log("multiplication....")
//      return a*b 
// }

// functionName()


// function promiseFunct(number){

//      return(new Promise((resolve, reject) => {
//           if(number>10)
//                resolve("successful")
//           else
//               reject("not valid")
//      }))

// }
// promiseFunct(1).then(
     
//      (value)=>{console.log(value)
//           return value
//      },
//      (error)=>{console.log(error)
     
//      }

// )
// .then((result)=>console.log("the call is "+result))


//--------------------------Array Methods---------------------------------------

// const fruits=["Banana","Apple","Dragonf","Oranage"]

// console.log("to String------->", fruits.toString())
// console.log(fruits.at(2))

// delete fruits[0]
// console.log(fruits[0])


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren)

// console.log(b)
// let b=10;

// console.log(b)
// 
// Shift Assignment Operators

// let x=5;
// console.log(x.toString(2).padStart(32,'0'))
// let y=3;

// let p=x<<y
// let z= x>>>y   //The y = 3 specifies that the bits should be shifted 3 positions to the left.
// // Original:      00000000 00000000 00000000 00000101 (5 in binary) 32 bit representation
// // After << 3:  
// console.log(p)  //00000000 00000000 00000000 00101000
// console.log(z) 
//  let array=[]
// console.log(array)
// array.push(1,2,3)
// console.log(array)
// delete(array[1])
// console.log(array[1])

// let array1=[]
// console.log(array1)



// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi","strawberry"];
// fruits.copyWithin(2, 0);
// console.log(fruits)
// console.log(fruits.length)

// console.log(fruits.lastIndexOf("Banana"))

//  const array=[52,500,84,2222]

// // console.log(Math.min(5,7,6,1,4,5))

// const newArray=array.map((value)=> value*3)

// console.log(newArray);

// let d= new Date()
// console.log(d)


// let a={
//     x:"10",
//     y:"20",
    
// }

// let b={
//     x:"10",
//     y:"20"
// }

// console.log(a.z)

// const fruits= new Map()

// fruits.set("apple",500)
// fruits.set("banana",400)
// console.log(fruits)
// console.log(fruits.get("banana"))
// console.log(fruits.banana)


// const numbers=[1,8,6,7,9,5,2]

// let [num1,,,num2,...restNo]=numbers
// console.log(restNo)
// console.log(num1,num2)

// console.log([...numbers,2,4,6,])

// console.log(numbers)

// let text = "Is this all there is R26cs039,R16ec039,R36me120,R16cl028?";
// let result = text.match(/R\d{2}[cem][scel]\d{3}/ig);
// console.log(typeof(result))
// console.log(result)


function OuterFunction(outerVariable){
    return function InnerFunction(innerVariable)
    {
        console.log("Outer:"+outerVariable +"and"+"inner:"+innerVariable)
    }
}

const closureExample = OuterFunction("Hello")
closureExample("world")