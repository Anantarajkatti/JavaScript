
//How to Select DOM Elements

let parentDiv= document.getElementById("parentDiv")
console.log(parentDiv) //<div id="parentDiv"> hello </div>

const famContacts = document.getElementsByClassName("family")
console.log(famContacts) //  HTMLCollection(2)[p.family,p.family]

// The HTML collection looks like an array, but it is not.
//  You can access the elements using bracket notation just as you would with an array 
//  – but you cannot apply array methods like map, filter, and forEach on it.

console.log(famContacts[0]) //<p class="family">Marie</p>

// in order to use them in methods.
// You'd first need to convert the HTML collection into an array.

