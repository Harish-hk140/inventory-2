import React from 'react';
import AddToCart from './AddToCart';

const OrderSummary = () => {
  const product = {
    name: 'Office Chair',
    image:  "https://picsum.photos/id/1/200",
    price: 2000,
    originalPrice: 4000,
    quantity: 1,
    rating: 4.5,
    reviews: 200,
  };

  const total = product.price * product.quantity;

  return (
    <div className="w-full mt-6 p-6 bg-gray-500 shadow-lg rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>

      <div className="flex items-center space-x-4">
        <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
          <p className="text-sm text-gray-900">Rating:{product.rating} ({product.reviews} reviews)</p>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-green-400 font-bold">Rs. {product.price}</p>
            <p className="line-through text-gray-900 text-sm">Rs. {product.originalPrice}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">Quantity: {product.quantity}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-medium text-gray-900">
        <p>Total</p>
        <p>Rs. {total}</p>
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Proceed to Checkout
      </button> 
    </div>
  
  );
  <AddToCart/>


};

export default OrderSummary;

