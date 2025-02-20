// //DOM  :- HTML DOM is standard object model and programming interface for HTML
// The Document Object Model (DOM) connects web pages to scripts or programming languages
// The DOM represents a document with a logical tree.
// he DOM is not part of the JavaScript language, but is instead a Web API used to build websites.

// //DOM Methods are actions you can perform ex: getElementById

// //DOM property is a value that you can get/set ex: innerHTML


// //How to Select DOM Elements

// let parentDiv= document.getElementById("parentDiv")
// console.log(parentDiv) //<div id="parentDiv"> hello </div>

// const famContacts = document.getElementsByClassName("family")
// console.log(famContacts) //  HTMLCollection(2)[p.family,p.family]

// // The HTML collection looks like an array, but it is not.
// //  You can access the elements using bracket notation just as you would with an array
// //  – but you cannot apply array methods like map, filter, and forEach on it.

// console.log(famContacts[0]) //<p class="family">Marie</p>

// // in order to use them in methods.
// // You'd first need to convert the HTML collection into an array.

// let famContactsArray = [...famContacts]

// famContactsArray.forEach(element => console.log(element)) // <p class="family">Marie</p>
//                                                         //   <p class="family">Jose</p>

// //getElemetsBytagName
//  const allContacts = document.getElementsByTagName('p')
//  console.log(allContacts)        //HTMLCollection(2)[p.family,p.family,p.work,p.work]

//  //querySelector
// //The example above returns only the first element with a class of work and ignores the rest.
// const firstWorkContact = document.querySelector('.work')
// console.log(firstWorkContact) //    <p class="work">Anne</p>

// const thirdBtn = document.querySelector('div button:nth-child(3)')
// console.log(thirdBtn) //<button>Third button</button>

// //querySelectorAll
// const allBtns = document.querySelectorAll('button')
// console.log(allBtns)   //NodeList(4)[button,button,button,button]

// const imageElement = document.querySelector('img')
// console.log(imageElement.getAttribute('src'))

// imageElement.setAttribute('src', 'new-image.jpg')
// console.log("AFTER:", imageElement.getAttribute('src'))

// imageElement.removeAttribute('height', '200')
// console.log("AFTER:", imageElement.getAttribute('height'))

// //hasAttribute
// //The hasAttribute method returns true if the specified attribute exists and returns false if it doesn't.
// console.log("src", imageElement.hasAttribute('src'))

// //style
// const paragraph = document.querySelector('h1')

// paragraph.style.color = 'white'
// paragraph.style.backgroundColor = 'green'

// //className
// const Paragraph = document.querySelector('p')

// console.log(Paragraph.className) // displays class name of first element  --- family brother man elder

// //The classList Property
// //With the classList property, you can add and remove classes.
// //  You can also toggle classes, replace existing class values
// // with new ones, and even check if the class contains a specific value.

// console.log(Paragraph.classList) //  DOMtokenList(5)

// //classList.add()
// Paragraph.classList.add('fav', 'tasty')
// console.log(Paragraph.classList)

// Paragraph.classList.remove('tasty')
// console.log(Paragraph.classList)

// Paragraph.classList.replace('fav', 'favorite')

// //classList.contains.

// // The code checks if the class passed to it is contained in the class list.

// // It returns true if it is included in the class list

// console.log(Paragraph.classList.contains('favorite')) //true

// // classList.toggle()
// //toggle property, it first checks if the class exists. If it exists, it will remove it. And if it doesn't exist, it will add it.
// Paragraph.classList.toggle('favorite')// removes favorite
// console.log(Paragraph.classList)

// Paragraph.classList.toggle('favorite') //add favorite
// console.log(Paragraph.classList)


//it is recommended to place script tag in the end of the body tag of HTML Doc..... this helps DOM to get all the elements to JS.
//othetwise sometimes it may  product "SYNTACTICAL ERROR"   

//getElementById  
                //Find an element by element id
                var ele_var1= document.getElementById("demo1");      
                ele_var1.innerText="this is changed line";  // demo1------this is changes line
                
                //document.getElementsByTagName(name)	
                                      //Find elements by tag name
                var buttons = document.getElementsByTagName("button") /// here elements aree stored in array 
                
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].innerText = "asdasd";  ///click -----asdasd
                }
                
                //document.getElementsByClassName(name)	Find elements by class name
                
                //document.querySelectorAll('tag.class')---- selects all tags with provided class
                
                let querry_var=document.querySelectorAll('div')
                for (var i = 0; i < querry_var.length; i++) {
                    querry_var[i].style.backgroundColor = "yellow";
                }
                
                
                //element.attribute = new value	 or   element.setAttribute(attribute, value)
                    
                //id: Specifies a unique identifier for the element.
                // class: Specifies one or more class names for the element, which can be used for styling with CSS or for JavaScript interactions.
                // style: Specifies inline CSS styles for the element.
                // title: Specifies a title for the element, often displayed as a tooltip.
                // href: Specifies the URL of a link (for anchor <a> elements).
                // src: Specifies the URL of the image or media file (for <img>, <audio>, <video>, etc.).
                // alt: Specifies alternative text for the image (for <img>).
                // target: Specifies where to open the linked document or where to display the result (for <a>).
                // type: Specifies the type of input element (for <input>).
                // value: Specifies the initial value of an input element (for <input>, <textarea>, etc.).
                // name: Specifies the name of an input element when submitting a form.
                // placeholder: Specifies a short hint that describes the expected value of an input field (for <input>, <textarea>).
                
                //element.style.property = new style	
                
                var  ele_var2= document.getElementById('demo2')
                  ele_var2.style.backgroundColor="red";  // styling properties changes to camel letters
                                                            // whene ever you provide cssText the privious styling of that element gets erased
                //   ele_var2.style.cssText="font-size:20px"  // here styling proprties remain same
                
                
                
                //document.createElement(element)	Create an HTML element
                let para=document.createElement('p')
                para.innerText='this is dynamically creatred paragraph';
                document.getElementById('demo1').appendChild(para);///document.appendChild(element)	Add an HTML element
                // for all created element append child is like destination . they show where that created element is going to addup
                
                //document.removeChild(element)	Remove an HTML element
                
                
                ///DOM Events
                //on click
                
                function textClick(elementObject)
                {
                    elementObject.innerText=" on click changed"
                }
                
                document.getElementById('demo4').onclick= display;
                function display(){
                    document.getElementById("demo4").innerHTML = Date();}
                
                //on input
                function upperCase() {
                    const x = document.getElementById("fname");
                    x.value = x.value.toUpperCase();
                  }
                
                  //onchange
                  function uPPerCasE(x) {
                    //const x = document.getElementById("fname");
                    x.value = x.value.toUpperCase();
                  }
                
                //   onmouseover and onmouseout
                //    onmousedown, onmouseup    
                
                
                //addEventListener() 
                // syntax: element.addEventListener(event, function, useCapture);
                document.getElementById("demo5").addEventListener("click",function(){document.getElementById('demo5').innerText="displaydate"});
                //mouseover
                //mouseout
                //window.addEventListener("resize", functionname)
                
                  //---------------------------------------------------------------------------------------------------------------------------------
                                                   // Async programming
                  //------------------------------------------------------------------------------------------------------------------------------
                
                //call back funct
                //A callback is a function passed as an argument to another function.
                  // finction name(parameters, callback function)
                
                  // async function
                 // Functions running in parallel with other functions are called asynchronous
                 //In the real world, callbacks are most often used with asynchronous functions.
                
                 //setTimeout(myfunction,3000)
                 //setInterval(myFunction, 1000);

//// Excercises

// let form = document.getElementById("myform");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(form.elements);
// });

function addRow() {
  let table = document.getElementById("myTable");
  let row = table.insertRow(1);
  row.insertCell(0).innerHTML = "content";
  row.insertCell(1).innerHTML = "content";
}

// button clickEvent
function clicked(event) {
  console.log("clicked");
  document.getElementById("paragraph").innerHTML = "button clicked";
}

function toggle(){
   let list= document.querySelector('.list')
   // the reson to use querySelector ratherthan using getElementsByClassName is  className returns HTML Colection but 
   //querySelector gets element
   console.log(list)
   list.style.display= (list.style.display === "none" || list.style.display === "")? 'block':'none'
   // this is because list.style.display="none" doesn't work properly everytime
   //thios time also got error non is not defined
}

let element=document.getElementById("myDiv")
element.addEventListener('mouseenter ',bgFunction)

function bgFunction(){
  element.style.backgroundColor="red"
}

let parent = document.getElementById("parent");
let child = document.getElementById("child");
let output = document.getElementById("output");

// mouseenter - triggers only when entering 'parent', not its child
parent.addEventListener("mouseenter", function() {
    output.innerText = "Mouse entered parent!";
    parent.style.backgroundColor = "lightgreen";
});

// mouseover - triggers when entering 'parent' or its child
parent.addEventListener("mouseover", function() {
    output.innerText = "Mouse over parent or child!";
});

// mouseleave - triggers when leaving 'parent'
parent.addEventListener("mouseleave", function() {
    output.innerText = "Mouse left parent!";
    parent.style.backgroundColor = "lightblue";
});

// mouseout - triggers when leaving 'parent' or its child
parent.addEventListener("mouseout", function() {
    output.innerText = "Mouse left parent or child!";
});

