import { useContext } from 'react';
import GlobalContext from '../Contexts/GlobalContext';

const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(GlobalContext);

  const handleAdd = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: 1
        }),
      });
      
      if (response.ok) {
        // Update local cart state
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
          setCart(
            cart.map(item =>
              item.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          );
        } else {
          setCart([...cart, { ...product, qty: 1 }]);
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <button onClick={handleAdd} className="bg-slate-900 hover:bg-slate-700 text-white px-4 py-1 mt-2 rounded-lg shadow-xl w-[150px]">
      Add to Cart   
    </button>
  );
};

export default AddToCart;