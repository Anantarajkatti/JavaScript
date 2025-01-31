
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

let famContactsArray = [...famContacts]

famContactsArray.forEach(element => console.log(element)) // <p class="family">Marie</p>
                                                        //   <p class="family">Jose</p> 
                                                        
//getElemetsBytagName
 const allContacts = document.getElementsByTagName('p')
 console.log(allContacts)        //HTMLCollection(2)[p.family,p.family,p.work,p.work] 
 
 
 //querySelector
//The example above returns only the first element with a class of work and ignores the rest.
const firstWorkContact = document.querySelector('.work')
console.log(firstWorkContact) //    <p class="work">Anne</p>

const thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn) //<button>Third button</button>

//querySelectorAll
const allBtns = document.querySelectorAll('button')
console.log(allBtns)   //NodeList(4)[button,button,button,button]

const imageElement = document.querySelector('img')
console.log(imageElement.getAttribute('src'))

imageElement.setAttribute('src', 'new-image.jpg')
console.log("AFTER:", imageElement.getAttribute('src'))

imageElement.removeAttribute('height', '200')
console.log("AFTER:", imageElement.getAttribute('height'))

//hasAttribute
//The hasAttribute method returns true if the specified attribute exists and returns false if it doesn't.
console.log("src", imageElement.hasAttribute('src'))

//style
const paragraph = document.querySelector('h1')

paragraph.style.color = 'white'
paragraph.style.backgroundColor = 'green'

//className
const Paragraph = document.querySelector('p')

console.log(Paragraph.className) // displays class name of first element


//The classList Property
//With the classList property, you can add and remove classes.
//  You can also toggle classes, replace existing class values 
// with new ones, and even check if the class contains a specific value.

console.log(Paragraph.classList)

//classList.add()
Paragraph.classList.add('fav', 'tasty')
console.log(Paragraph.classList)

Paragraph.classList.remove('tasty')
console.log(Paragraph.classList)

Paragraph.classList.replace('fav', 'favorite')

//classList.contains.

// The code checks if the class passed to it is contained in the class list.

// It returns true if it is included in the class list

console.log(Paragraph.classList.contains('favorite')) //true

// classList.toggle()
//toggle property, it first checks if the class exists. If it exists, it will remove it. And if it doesn't exist, it will add it.
Paragraph.classList.toggle('favorite')// removes favorite
console.log(Paragraph.classList) 

Paragraph.classList.toggle('favorite') //add favorite
console.log(Paragraph.classList)