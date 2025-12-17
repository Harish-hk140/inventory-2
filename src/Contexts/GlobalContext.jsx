import {createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const GlobalProvider = (props) => {
    const {children} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);

    // Fetch cart on component mount
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('http://localhost:3000/cart');
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
        fetchCart();
    }, []);

    return (
        <GlobalContext.Provider value={{currentPage, setCurrentPage, cart, setCart}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;