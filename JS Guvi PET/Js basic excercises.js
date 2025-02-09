//get todays date
// const today = new Date();
// console.log(today.getDate());
// console.log(today.getHours());
// console.log(today.getDay())

// let string= "w3Schoolresorce"
// let text=string

// setInterval(()=>{
//     text=text[text.length-1]+text.substring(0,text.length-1)
// console.log(text)

// },1000)

// console.log(string.length)

// string palindrome

// let string="maddam"
// let len=string.length
// let mid=len/2
// let str1=''
// let str2=''
// str1= string.substring(0,mid)

// if(len%2===0){
//    str2= string.substring(mid)

// }
// else {
//  str2= string.substring(mid+1)
// }
// str2=str2.split('').reverse().join()

// if(str1===str2)
// {
//     console.log("palindrom")

// }
// else
// console.log("not palindrom")

// let num=21
// count=0
// if(num%2===0){
//     console.log("not a prime")
// }
// else{
//     for( count=3;count<num;count++){
//         if(num%count===0){
//             console.log("its not prime")
//             break
//         }
//     }
// }

// if(count===num)
// {
//     console.log("its a prime")
// }


//second heighest and second lowest

// const array = [4, 3, 5, 2, 1];

// array.sort((x, y) => {
//   return x - y;
// });

// console.log(array);
// console.log(array[1])
// const newArray=array.reverse()
// console.log(newArray[1])


 let str= 'dog'
// let strComb=''
// for(let i=0;i<str.length;i++)
// {
//   strComb=str[i];
//   console.log(strComb)
//   for(let j=i+1;j<str.length;j++)
//   {
//      strComb=strComb+str[j]
//      console.log(strComb)
//   }
//   strComb=''
// }

// let alphaSortString="khjksyduiasdasfdhg"

// console.log(alphaSortString.split('').sort().join(''))
// console.log(alphaSortString.split('').reverse().join(''))

//Capitalize First Letter of Each Word

// let sentence="this is not what we expect"

// let words=[];
// words=sentence.split(' ')

// for(i in words)
// {
//     words[i]=words[i][0].toUpperCase()+words[i].substring(1)
// }
// console.log(words.join(' '))

// let array=[2,4,5,6]
// array.forEach((element)=>{
//     console.log(element*3)
// })

// console.log(array)


// let num=8
// let val1=0
// let val2=1
// let text="0,1,"
// if(num===1){
//     console.log('0')
// }
// else if(num===2){
//     console.log('0,1')
// }
// else{
//     for(i=3;i<=num;i++)
//     {
//         sum=val1+val2
//         val1=val2
//         val2=sum
//         text=text+sum+','
//     }
//     console.log(text)
// }
// let num=3*-5
// console.log(num)
// if(num>0){
//     console.log("sign is +")
// }
// else{
//     console.log('sign is -')
// }

// console.log(Math.pow(8,2))

// console.log(Math.max(1,6,3,8,6,9))



// * triangle
// let num = 5;
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }
/// ----- find second max-----------------------------------
// let array = [3, 1, 5, 2, 9];
// let max = 0;
// let secmax = 0;

// for (i = 0; i < array.length; i++) {
//   console.log(max, secmax);
//   if (array[i] > max) {
//     secmax = max;
//     max = array[i];
//   } else secmax = array[i];
// }

// console.log(max);
// console.log(secmax);
