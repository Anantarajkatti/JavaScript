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
