// import React, { useEffect, useState } from 'react'

// function UseEffect() {
//       return (
//     <div>
//       {/* <Example1/>   */}
//       {/* <ConditionalExample/> */}
//       {/* <OnlyOnce/> */}
//      {/* <Display/> */}

//     </div>
//   )
// }


// function Example1(){
         
//    const [count,setCount]=useState(0)

//    useEffect(
//     ()=>{
//         document.title=`You clicked ${count} times`
//     }
//    )

//     return(
//         <>
//           <div> A Button Click causing side effect when count is changed. it will change the title of the document</div>
//           <button onClick={()=>setCount(count+1)}>Count + 1</button>
//           <div>{count}</div>
//         </>
//     )
// }


// function ConditionalExample(){

//     const [name,setName]=useState('')
//     const [submit,setSubmit]= useState(false)

//     useEffect(
//         ()=>{
//             console.log(`causing effect when submit is ${submit} `)
//         },[submit]
//     )
//     return(
//         <>
//             <input type='text' onChange={(e)=>setName(e.target.value)}/>
//             <button onClick={()=>setSubmit(!submit)}>Submit</button>
//             <div>Name is :{name}</div>
            
//         </>
//     )
// }

// function OnlyOnce(){
//     const [x,setX]=useState(0)
//     const[y,setY]=useState(0)

//     const handleMouseMove=(e)=>{
//         console.log('mousemoved')
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     useEffect(
//         ()=>{
//             console.log("caused effect")
//         }
//     ,[])
//     return(
//         <>
//             hello
//             {window.addEventListener('mousemove',handleMouseMove)}
//             <div>{x}</div>
//             <div>{y}</div>
//         </>
//     )
// }

// function Display(){
//     const [display,setDisplay]= useState(false)

//     return(
//         <>
//              <button onClick={()=>setDisplay(!display)}>{display?'notShow' :"show"}</button>
             
//         </>
//     )
// }


// function CleanUp(){
//     const [x,setX]=useState(0)
//     const[y,setY]=useState(0)

//     const handleMouseMove=(e)=>{
//         console.log('mousemoved')
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     useEffect(
//         ()=>{
//             console.log("caused effect")

//             return()=>{
//                 console.log('unmounting is done')
//                window.removeEventListener("mousemove",handleMouseMove)
//             }

//         }
//     ,[])
//     return(
//         <>
//             hello
//             {window.addEventListener('mousemove',handleMouseMove)}
           
//             <div>{display&&x}</div>
//             <div>{display&&y}</div>
//         </>
//     )
// }


// export default UseEffect 
