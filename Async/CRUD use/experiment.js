// //  const promiseEx= new Promise((resolve,reject)=>{
// //     let order= false
// //     setTimeout((order)=>{
// //         order=true
// //         if(order){
// //             resolve("order no:1")
// //         }
// //         else{
// //             reject("order failed")
// //         }

// //     },2000)

    
// //  })

// //  promiseEx.then((value)=>{return value}).then((result)=>console.log("your status for"+result))
// //  .catch((err)=>{console.log(err.name)})

// //  console.log("hi hello all")

// // fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/product")
// //     .then((response)=>response.json())
// //     .then((data)=>console.log(data))
// //     .catch((err)=>console.log(err))

// const onePromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("I am first"),3000)
   
// })

// async function AsyncFun(){
//     let variable= await onePromise
//     console.log(variable)
//     console.log("i am logged second")
// }

// AsyncFun()


// async function AsyncFuns(){
//    await setTimeout(()=>console.log("i am first"),3000)

//     console.log("i am second")


// }

// AsyncFuns()


imp