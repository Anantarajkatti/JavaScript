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

// let num=5;

// let array=[0,1]

// for (i=0;i<=num-3;i++)
// {
//     array[i+2]=array[i]+array[i+1]
// }

// console.log(array)
////////////////////////////////////////////////////////////////////////////////////////////////////

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// const array=[1,0,2,3,2,2,5,4]
// let val=2

// const newArray= removeElement(array,val)

// function removeElement(array,val)
// {

//     let count=0
//     for(i in array)
//     {
//         if(array[i]===val)
//         {
//             delete array[i]
//         count++
//         }
//     }

//     return  count
// }
// console.log(array)

// var findMedianSortedArrays = function (
//   nums1 = [1, 2, 3, 4, 5],
//   nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// ) {
//   nums1.push(...nums2); // to cobine both arrays

//   nums1.sort((x, y) => x - y); // to sort numerically
//   console.log("num1 array", nums1);
//   let len = nums1.length; // get length of array to perform operation
//   let mid = len / 2;
//   mid = parseInt(mid);
//   console.log(typeof mid);
//   console.log("middle", mid);

//   console.log("length", len);

//   if (len % 2 === 0) {
//     console.log("even Numbers");
//     console.log(nums1[mid] + nums1[mid - 1]);
//     console.log(nums1[mid], nums1[mid - 1]);
//     return parseFloat(((nums1[mid] + nums1[mid - 1]) / 2).toFixed(4)); // to Fixed  convertsnumber to string
//   } else {
//     console.log("odd number", nums1[mid]);
//     console.log("fixed", nums1[mid].toFixed(4), typeof nums1[mid].toFixed(4));
//     console.log(parseFloat(nums1[mid].toFixed(4)));
//     return parseFloat(nums1[mid].toFixed(4));
//   }
// };
// console.log("this is median func");
// console.log(findMedianSortedArrays());

// function includeSeven(arr) {
//   arr.find((element) => element === 7)
//     ? console.log("found")
//     : console.log("not found");
// }

// includeSeven([3, 7, 78, 80, 34]);

// function sumofTwo(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let rest = 0;
//     if (nums[i] <= target) {
//       rest = target - nums[i];
//       console.log(rest);
//       let secondIndex = nums.indexOf(rest, i + 1);
//       if (secondIndex === -1) continue;
//       else return [i, secondIndex];
//     }
//   }
// }
// const result = sumofTwo([-1, 2, 1], 0);
// console.log(result);
//--------------------------------------------------------------------------------------------------------------------------------------------------
//find  Amicable Numbers and factors of a number
// function factors(num) {
//   let number = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       number = number + i;
//     }
//   }
//   return number;
// }

// function checkAmicability(num1, num2) {
//   let result1 = factors(num1);
//   let result2 = factors(num2);
//   if (result1 === num2 && result2 === num1)
//     return `${num1} and ${num2}Yes They are amicable Numbers;`;
//   else return "they are not amicable numbers";
// }

// console.log(checkAmicability(220, 284));

// Prime Number or not
// function checkPrimeNumber(number) {
//   if (number === 1 || number % 2 === 0) {
//     console.log("It is not prime Number");
//     return true;
//   } else
//     for (let i = 3; i < number; i++) {
//       if (number % i === 0) {
//         console.log("it is not prime");
//         return true;
//       } else if (i === number - 1) {
//         console.log("Yes it is a prime Number");
//         return true;
//       }
//     }
// }

// checkPrimeNumber(21);

//-------------------------------------------------------------------------------------------------------------------------------------------------
// You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

// Input Description:
// You are given a number ‘n’. Then in next line n space separated numbers.

// Output Description:
// Print the array as mentioned

// Sample Input :
// 4
// 1 1 3 2
// Sample Output :
// 2 3 1

function sortDif(array) {
  array.sort((x, y) => x - y);
  console.log("sorted array=", array);
  // previousCount, currentCount
  let previousCount = 0;
  let currentCount = 0;
  let newArray = [];
  let temp = 0;
  let next = 0;
  let i = 0;
  let j = 0;
  //put a for loop
  for (i = 0; i < array.length; ) {
    console.log("i=", i);
    currentCount = 1;
    for (j = i + 1; j <= array.length; j++) {
      console.log("j=", j);
      if (array[i] == array[j]) {
        currentCount = currentCount + 1;
        console.log("same so count incrersed= ", currentCount);
      } else {
        newArray.push(array[i]);
        console.log("new Array -", newArray);
        console.log("previos Count =", previousCount);
        console.log("current Count =", currentCount);
        if (previousCount > currentCount) {
          console.log("swap is executing");
          temp = newArray[newArray.length - 2];
          newArray[newArray.length - 2] = newArray[newArray.length - 1];
          newArray[newArray.length - 1] = temp;

          // i = j;
          console.log("next=", i);
          console.log("new array after swap", newArray);
          break;
        } else {
          console.log("prev count < current count");
          previousCount = currentCount;
          //i = j;
          console.log("next=", i);
          break;
        }
      }
    }
    i = j;
  }
  return newArray;
}
console.log(sortDif([1, 1, 2, 3]));
