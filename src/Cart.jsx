import { useContext } from 'react';
import GlobalContext from './Contexts/GlobalContext';

const Cart = () => {
  const { cart, setCart } = useContext(GlobalContext);

  const updateQuantity = async (id, qty) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qty }),
      });
      
      if (response.ok) {
        setCart(cart.map(item => 
          item.id === id ? { ...item, qty } : item
        ));
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setCart(cart.filter(item => item.id !== id));
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">Your cart is empty</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4 last:border-b-0">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Rs. {item.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.qty - 1))}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="px-3">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                    
                    <p className="font-semibold">Rs. {item.price * item.qty}</p>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total: Rs. {total}</span>
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;