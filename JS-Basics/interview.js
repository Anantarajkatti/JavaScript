//function for sum of two numbers
//  function Sum(num1,num2){
//     return num1+num2;
//  }

// const result=Sum(5,10)
// console.log(result)

//maximum number in array
 //Math.max(n1,n2,n3.....)  --- this will also return max among numbers

//  const array=[12,34,53,67];
//  let max= 0;

// //  for(x  of array){
// //     max= Math.max(max,x)
// //  }
// max=Math.max(...array)


//  console.log(max)

// palindrome

// let string="string"
// console.log([...string]) //[ 's', 't', 'r', 'i', 'n', 'g' ]


// // if(string==[...string].reverse().join()){  
//     if(string== string.split('').reverse().join()){ //// to reverse string we have to split -> reverse-> and join  
//     console.log("yes it is palindrome")
// }
// else console.log("no it is not")

// input array and return even numbetrs array

// const array=[2,5,4,6,7,13,42,44];
// let evenArray=[]  

// // for( x of array){
// //     if(x%2==0){
// //         evenArray.push(x)
// //     }
// // }
// evenArray=array.filter((num)=>num%2==0)  //When the function body is just a single expression  it automatically returns the result 
// console.log(evenArray);

//factorial

// function factorial(number){
//     if(number===0||number===1)
//     {
//         return 1
//     }
//     else
//     return number* factorial(number-1)
// }

// console.log(factorial(5))

// let num=5
// let result=1
// for(i=num-1;i>=0;i--)
// {
//     if (num===1 || num===0)
//     {
//       break 
//     }

// console.log(`${result}=${result}*${num}`) 
// result=result*num   
// num=num-1;
// }

// console.log(result)

// prime number-----------------------------------------------------------

// let primeNumber=13

// if( primeNumber%2===0){
//     console.log('it is not prime Number')
// }
// else{
//     for(i=3;i< primeNumber;i++){
//         console.log(i)
//         if(primeNumber%i===0){
//             console.log('it is not prime')
//             break;
//         }
//         if(i === primeNumber-1){
//             console.log('it is prime')
//         }
//     }
// }

// Fibonnacci series---------------------------------------------------------------------------

let num=5;

let array=[0,1]

for (i=0;i<=num-3;i++)
{
    array[i+2]=array[i]+array[i+1]
}

console.log(array)  










