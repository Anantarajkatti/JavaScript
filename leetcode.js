//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

const array=[1,0,2,3,2,2,5,4]
let val=2

const newArray= removeElement(array,val)

function removeElement(array,val)
{
   
    let count=0
    for(i in array)
    {
        if(array[i]===val)
        {
            delete array[i]
        count++
        }
    }
      

    return  count
}
console.log(array)
