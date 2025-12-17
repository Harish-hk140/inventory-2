import React from 'react'
const StudentCard = (props)=>{
    console.log(props)
    const {fname, lname, age} = props;
    return (
        <>
        {/* <div className="shadow-lg p-7 ml-160 mr-70 text-red-500 w-[250px] rounded-lg">
            <h1>STUDENT DETAILS </h1> */}
        <div className="shadow-lg bg-gray-500 p-4">
            First Name:{fname}<br/>
            Last Name:{lname}<br/>
            Full Name:{fname} {lname}<br/>
            Age:{age}
            </div>
        </>
    )
};
export default StudentCard;