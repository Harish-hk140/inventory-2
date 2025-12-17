import { useState } from 'react';

const AdminPage=()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const productData = {
            name,
            price: parseInt(price),
            image
        };

        
    };

    return (
        <>
        <div className="flex-col mt-40 ml-130 rounded-xl bg-gray-400  shadow-2xl h-[500px] w-[500px] py-20 flex justify-center">
            <h1 className="flex mb-5 justify-center mt-1 text-3xl mb-6 font-bold ">Add Product</h1>
            <form onSubmit={handleSubmit} className="flex-col  flex align-center justify-center">
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5"
                    required
                />
                <input 
                    type="number" 
                    placeholder="Product Price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Product url" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className=" flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-6 mx-7 p-5"
                    required
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white  mb-3 mx-20 font-bold p-5 rounded-lg">Add Product</button>
            </form>
        </div>
        </>
    )
}
export default AdminPage;








































// try {
        //     const response = await fetch('http://localhost:3000/products', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(productData),
        //     });
            
        //     if (response.ok) {
        //         alert('Product added successfully!');
        //         setName('');
        //         setPrice('');
        //         setImage('');
        //     }
        // } catch (error) {
        //     console.error('Error adding product:', error);
        // }
