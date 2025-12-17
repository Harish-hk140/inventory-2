// import { useEffect } from "react";

// const UserDetails = () => {
//     const [UserData, setUserData] = useState({})

//     useEffect(() => {
//         const fetchData = async () => {
//         }
//         fetchData()
//         }, [])
//     return (
//         <div className="w-[300px] mx-auto bg-orange-300 flex flex-col  justify-center items-center rounded-md">
//         <h1 className= "text-xl mb-2"> UserDetails</h1>
//         <p className="text-4xl mb-2">{UserData.name}</p>
//         </div>
//     );
// };

// export default UserDetails;


import {useState,useEffect, useContext} from "react";
import GlobalContext from "../contexts/GlobalContext"



const UserDetails=()=>{
  const{currentPage}=useContext(GlobalContext);
  const[loading,setLoading]=useState(true)
  const[userData,setUserData]=useState({})

 useEffect(()=>{
   const fetchData=async()=>{
    setLoading(true)
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`);
    const data =await response.json()
    setLoading(false)
    console.log(data)
    setUserData(data)
   }
   fetchData()
 },[currentPage])


    return(
        <div className="bg-gray-900 w-[400px] mx-auto rounded-xl p-4 m-4 shadow-lg">
            <h1 className="text-2xl text-blue-500 m-2text-bold">User Details</h1>

            {loading ?( <p>Loading...</p>)
            :(
            <>
            <p className="text-lg text-red-500"><strong>Name:</strong> {userData.name}</p>
            <p className="text-lg text-red-500"><strong>Email:</strong> {userData.email}</p>
            <p className="text-lg text-red-500"><strong>Phone:</strong> {userData.phone}</p>
            <p className="text-lg text-red-500"><strong>Website:</strong> {userData.website}</p>
            <p className="text-lg text-red-500"><strong>Company:</strong> {userData.company.name}</p>
            <p></p>
            </>
           )}
        </div>
            
        )
}

export default UserDetails;