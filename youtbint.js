console.log("A"-1); // why it is NaN using TYPE Coercion JS tries to conver A to Number but cannot able to do so 
console.log("hello"+'100')
console.log('2'+ 2+"2")//222
console.log('2'+ 2-"2")//20
console.log('2'+ 2/'2')//21;
console.log('2'+ 2*'2')//24;

const obj={
    name:"something"
}

const a={}
const b={
    name:"tilak"
}
const c={
    name:"tahir"
}

const d={
    name:"amar"
}
a[b]={
    name:"ankit"
}

a[c]={
    name:"abhi"
}
a[d]={
    name:"ajay"
}

console.log(a[b]) // ajay

//why ajay as output is because objects(b,c,d) as key in object 'a' are automatically converted to string
//a['[object object]'] and assignment overwrites the values . so last over written value will be {name:'ajay'}

const x=0
const z= false
console.log(x==z) // // true
console.log(x===z) // false

//show eXAMPLE OF NaN
console.log("s"/2)

console.log(NaN==NaN)// false
console.log(NaN===NaN)//false 
// why: According to the IEEE 754 floating-point standard, NaN is not considered equal to any value, including itself.

//example of MAP
        const array=[1,2,3,4,5]
        const newArr=array.map(e=>e>2) //[ false, false, true, true, true ]
        const newFilterdArr=array.filter(e=>e>2) // [ 3, 4, 5 ]
        console.log(newArr);
        // Used to transform an array by applying a function to each element.
        // Always returns a new array of the same length as the original.
        // Does not modify the original array.


//Array methods
        //concat() :==returns a new array, containing the joined arrays.
        const arr1 = ["Cecilie", "Lone"];
        const arr2 = ["Emil", "Tobias", "Linus"];
        const arr3 = ["Robin"];
        const children = arr1.concat(arr2, arr3);

//copyWithin():==
        // method copies array elements to another position in an array.
        //The copyWithin() method overwrites the existing values.

        //Copy to index 2, the elements from index 0 to 2:

        const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
        fruits.copyWithin(2, 0, 2);

//entries()
        // // method returns an Iterator object with the key/value pairs from an array:
        // // [0, "Banana"]
        // // [1, "Orange"]
        // // [2, "Apple"]
        // // [3, "Mango"]
        // //The entries() method does not change the original array.
        // console.log(fruits.entries())

//filter
        //The filter() method creates a new array filled with elements that pass a test provided by a function.
        const array1=[10,26,65,78,45]
        console.log(array1.filter(e=>e>45))


// splice
// slice
// sort

// shift 
// unshift

