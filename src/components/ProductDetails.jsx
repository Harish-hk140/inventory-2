// import { useParams } from "react-router";
// import { useState, useEffect } from 'react';
// import AddToCart from './AddToCart';
// import OrderSummary from './OrderSummary';

// const ProductDetails=()=>{
//     const {id}=useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async() => {
//             try {
//                 const response = await fetch(`http://localhost:3000/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error('Error fetching product:', error);
//             }
//         }
//         fetchProduct();
//     }, [id]);

//     if (!product) {
//         return <div className="text-center mt-20">Loading...</div>;
//     }

//     return(
//         <>
//         <div className="max-w-4xl mx-auto p-6 mt-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                     <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg"/>
//                 </div>
//                 <div>
//                     <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//                     <p className="text-2xl text-gray-700 mb-6">Rs. {product.price}</p>
//                     <AddToCart product={product} />
//                 </div>
//             </div>
//         </div>
//         <OrderSummary/>
//         </>
//     )
// }
// export default ProductDetails;






import { useParams } from "react-router"
import OrderSummary from "./OrderSummary"

const ProductDetails=()=>{
    const {id}=useParams()
    return(
        <>
        <div>Product Details {id}</div> 
        <OrderSummary/>
        </>
    )
}
export default ProductDetails;