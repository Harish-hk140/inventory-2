// const counter = () => {
//     return (
//         <div className="w-[300px] bg-yellow-50 m-4 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center justify-center">
//         <h1 className="text-xl mb-2">Counter</h1>  
//         <p className="text-4xl mb-2">0</p>
//         <div className="flex gap-2">
//             <button className="bg-red-400 text-white px-4 py-2 rounded-md">Decrement</button>
//             <button className="bg-red-400 text-white px-4 py-2 rounded-md">Increment</button>
//         </div>
//         </div>
//     )
// }   
//  export default counter;

import {useState } from "react" 
const Counter=()=>{
    const[count,setCount]=useState(0)
    
    const increment =()=>{
        console.log("Increment button clicked");
        setCount(count + 1);

    };
    const decrement =()=>{
        console.log("decrement button clicked");
        setCount(count - 1);

    };
    return (
        <div className="w-[300px] bg-gray-900 m-4 mx-auto shadow-lg p-4 rounded-md  flex-col items-center justify-center " >
            <h1 className="flex justify-center text-red-600 text-xl mb-2">Counter</h1>
            <p className="flex text-4xl mb-2 font-bold text-red-500 justify-center">{count}</p>
            <div className="flex justify-center gap-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md"onClick={decrement}>Decrement</button>
                <button className="bg-green-700 text-white px-4 py-2 rounded-md"onClick={increment}>Increment</button>
            </div>
        </div>
    )
}
export  default Counter;