// import { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

// const ProductList=()=>{
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async() => {
//             try {
//                 const response = await fetch('http://localhost:3000/products');
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         }
//         fetchData();
//     }, []);

//     const addToCart = (productId) => {
//         try {
//             const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
//             const product = products.find(p => p.id === productId);
            
//             const existingItem = existingCart.find(item => item.id === productId);
            
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 existingCart.push({
//                     id: productId,
//                     name: product.name,
//                     price: product.price,
//                     image: product.image,
//                     quantity: 1
//                 });
//             }
            
//             localStorage.setItem('cart', JSON.stringify(existingCart));
//             alert('Product added to cart!');
//         } catch (error) {
//             console.error('Error adding to cart:', error);
//             alert('Error adding to cart');
//         }
//     };

//     return(
//         <>
//         <div className="min-h-screen mx-auto flex-col gap-4 bg-grey-500 w-full p-4 shadow-lg">
//             <h1 className="text-2xl font-bold mb-15 mt-10 text-center">PROUDCUT LIST</h1>
//             <div className="flex flex-row mb-20 mt-30 justify-center gap-30">
                
//             {products.map((product)=>{

//                 return(
//                     <ProductCard key={product.id}
//                       name={product.name}
//                       price={product.price}
//                       image={product.image} 
//                       id={product.id}
//                       onAddToCart={addToCart} />
//                 )
//       })}
//       {/* <OrderSummary/> */}


//             </div>
//         </div>
//         </>
//     )
// }

// export default ProductList;
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList=()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchData();
    }, []);

    return(
        <>
        <div className="min-h-screen mx-auto flex-col gap-4 bg-gray-500 w-full p-4 shadow-lg">
            <h1 className="text-2xl font-bold mb-15 mt-10 text-center">PROUDCUT LIST</h1>
            <div className="flex flex-row mb-20 mt-30 justify-center gap-30">
                
            {products.map((product)=>{

                return(
                    <ProductCard key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image} 
                      id={product.id} />
                )
      })}
      {/* <OrderSummary/> */}


            </div>
        </div>
        </>
    )
}

export default ProductList;

