// import React from 'react';
// const App = () => {
//   let firstname ="john"
//   let lastname ="Smith"
//   return (
//    <React.Fragment>
//   <h1 className="text-4xl mb-2">Student Details</h1>
//    <div className="txt-lg"> 
//   First name:{firstname} <br/>
//   Last name:{lastname} <br/>                        
//   Full name:{firstname} {lastname}
//   </div>
//   </React.Fragment>
// )
// }
// export default App;

// import React, { useContext } from 'react'
// import StudentCard from './components/studentCard';
// import Counter from './components/counter';
// import UserDetails from './components/UserDetails';
// import Pagination from "./components/Pagination";
// import Footer from "./components/Footer";
// import { GlobalProvider } from './contexts/GlobalContext';
// // import {GlobalProvider } from "./context/GlobalContext";
// const App=()=>{

//   let firstName="Jhon";
//   let lastName="Smith";

//   return (
//     <>
//     <h1 className="text-4xl mb-2"> Student Details</h1>
//   {/* <div className="text-lg" >
//     First Name: {firstName} <br/>
//     Last Name: {lastName}<br/>
//     Full Name: {firstName} {lastName}
    
    
//   </div> */}
//   {/* {StudentCard({fname: "Tony",lname:"Stark",age:30})} */}
//   <StudentCard fname={firstName} lname={lastName} age={20} />
//   <Counter/> 
//   <GlobalProvider>
//     <UserDetails/>
//     <Footer/>
//   </GlobalProvider>
  
 
//   </>
// )
// };
// export default App;


// import Ecommerce from './components/Ecommerce';

// const App=()=>{
//   return (
//     <>
//     <Ecommerce/>
    
//     </>
//   )
// };
// export default App;

// import React from 'react';
// const App = () => {
//   let firstname ="john"
//   let lastname ="Smith"
//   return (
//    <React.Fragment>
//   <h1 className="text-4xl mb-2">Student Details</h1>
//    <div className="txt-lg"> 
//   First name:{firstname} <br/>
//   Last name:{lastname} <br/>                        
//   Full name:{firstname} {lastname}
//   </div>
//   </React.Fragment>
// )
// }
// export default App;

// import React, { useContext } from 'react'
// import StudentCard from './components/studentCard';
// import Counter from './components/counter';
// import UserDetails from './components/UserDetails';
// import Pagination from "./components/Pagination";
// import Footer from "./components/Footer";
// import LoginForm from './components/LoginForm';
// import { GlobalProvider } from './contexts/GlobalContext';
// // import {GlobalProvider } from "../context/GlobalContext";
// import ProductList from "./components/ProductList";

// const App=()=>{

//   let firstName="Jhon";
//   let lastName="Smith";

//   return (
//     <>
    
//     <h1 className="text-4xl mb-2"> Student Details</h1>
//   { <div className="text-lg" >
//     First Name: {firstName} <br/>
//     Last Name: {lastName}<br/>
//     Full Name: {firstName} {lastName}
    
    
  // </div> }
  {/* {{StudentCard({fname: "Tony",lname:"Stark",age:30})} } */}
  {/* // { <StudentCard fname={firstName} lname={lastName} age={20} /> */}
  {/* <Counter/> 
  <GlobalProvider>
    <UserDetails/>
    <ProductList/>
    <Footer/>
    <LoginForm/>
  </GlobalProvider>
  
 
  </>
)
};
export default App;  */}


import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import EcommerceFooter from "./components/EcommerceFooter";

const App=()=>{
  return (
    <>
    <Header/>
    <ProductList/>
    <Cart/>
    <EcommerceFooter/>
    </>
  )
};
export default App;



// import Furniture from './components/Furniture';

// const App=()=>{
//   return (
//     <>
//     <Furniture/>
    
//     </>
//   )
// };
// export default App;


