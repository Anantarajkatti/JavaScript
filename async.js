// call back
// function hello(callback){
//     let name='Anantaraj'
//     callback(name)
// }

// function surname(name){
//     console.log(`${name} Katti`)
// }

// hello(surname)

//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

try {
function example(callback){
    console.log("main function executing")
    setTimeout(callback,2000)
}

function delayedFun(){
    console.log('delayed for 2 sec')
}

example(delayedFun)  
    
} catch (error) {
    console.log(error)
    
}