// const Pagination = () => {
//     return (
//         <div className="w-[300px] mx-auto bg-orange-300 flex flex-col  justify-center items-center rounded-md">
//          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleprevious} >
//             {"<"}
//             </button> 
//          <div className="text-xl bg-yellow-200 rounded-md px-4 py-2">1</div>
//          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlenext}>
//             {">"}
//         </button> 
        
//         </div>
//     )
// }

// const Pagination = (props) => {
//     const handlePrevious=()=>{
//       setCurrentPage(currentPage)=()=>{
//         localStorage.setitem('page',currentPage-1);
//       }
//     }
//     const handleNext=()=>{
//       setCurrentPage(currentPage + 1);
//       localstorage.set
//     }
//     return (
//         <div className="w-[300px] mx-auto bg-orange-300 flex flex-col  justify-center items-center rounded-md">
//          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleprevious} >
//             {"<"}
//             </button> 
//          <div className="text-xl bg-yellow-200 rounded-md px-4 py-2">1</div>
//          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlenext}>
//             {">"}
//         </button> 
        
//         </div>
//     )
// }

import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext"; 




const Pagination = () =>{

    const {currentPage,setCurrentPage} = useContext(GlobalContext);
    
    const handlePrevious= () =>{
        setCurrentPage(currentPage-1);
        localStorage.setItem('Page',currentPage-1)
    }

    const handleNext = () =>{
        setCurrentPage(currentPage+1)
        localStorage.setItem('Page',currentPage+1)
    }

    return (
        <div className="w-[300px] mx-auto bg-gray-900 m-4 p-4 rounded-md flex flex-row shadow-lg space-x-4 items-center justify-around">
            <button className="p-4 bg-red-500 rounded-md" onClick={handlePrevious}>{"<"}</button>
             <div className="p-4 bg-orange-400 rounded-md">{currentPage}</div>
            <button className="p-4 bg-red-500 rounded-md" onClick={handleNext}>{">"}</button>
        </div>
    )
}

export default Pagination;