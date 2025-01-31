// call back
// function hello(callback){
//     let name='Anantaraj'
//     callback(name)
// }

// function surname(name){
//     console.log(`${name} Katti`)
// }

// hello(surname)


///nested call back
// function fun1(callback){
//    setTimeout(()=> { console.log("this is function 1")
//     callback()}
   
//    ,1000)
   
// }

// function fun2(callback){
//     setTimeout(()=> { console.log("this is function 2")
//         callback()},1000)
    
// }

// function fun3(callback){
//     setTimeout(()=>{ console.log("this is function 3")
//         callback()},1000)
   
// }

// fun1(()=>{
//     fun2(()=>{
//         fun3(()=>{
//             console.log("the end")
//         })
//     })
// })

// call back hell
// function getUserData(userId, callback) {
//     setTimeout(() => {
//         console.log(`Fetched data for user ${userId}`);
//         callback(userId);                                         //(userId) => {
//                                                                          //     getPosts(userId, (postId) => {
//                                                                         //                                     getComments(postId,   () => {
//                                                                         //                                                                  console.log("Fetched all data");
//                                                                         //                                                                  } 
//                                                                         //                                                 ); 
//                                                                                  //                          }
//                                                                                  //     );
//                                                                              // }   
//     }, 1000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         console.log(`Fetched posts for user ${userId}`);
//         callback(userId);
//                                                                     //(postId) => {
//                                                                         //         getComments(postId,   () => {
//                                                                         //                                     console.log("Fetched all data");
//                                                                         //                                      } 
//                                                                         //

//     }, 1000);
// }

// function getComments(postId, callback) {
//     setTimeout(() => {
//         console.log(`Fetched comments for post ${postId}`);
//         callback();         
//                                                                                  //() => {
//                                                                         //             console.log("Fetched all data");
//                                                                         //         }

//     }, 1000);
// }


// getUserData(1, (userId) => {
//                             getPosts(userId, (postId) => {
//                                                             getComments(postId, () => {
//                                                                                         console.log("Fetched all data");
//                                                                                         }
//                                                                          );
//                                                             }
//                                     );
//                             }
//             );



//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// try {
// function example(callback){   // observe how you mention 
//     console.log("main function executing")                                                      
//     setTimeout(callback,2000) //  () is not mentioned           
// }

// function delayedFun(){  
//     console.log('delayed for 2 sec')
// }

// example(delayedFun)   // how you call () is not mentioned for callback function
    
// } catch (error) {
//     console.log(error)
    
// }



// Promise

// promise with delay

let myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },1000)
})

myPromise.then((value)=>{
    console.log(value)
    console.log("then resolved")
    
    
})
    .then((value)=>console.log(value,"second then"))



// Write a JavaScript program that converts a callback-based function to a Promise-based function.

