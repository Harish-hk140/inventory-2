import { Link } from "react-router";

const ProductCard=(props)=>{
    const{name,price,image,id,onAddToCart}=props;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCart(id);
    };

    return(
        <div className="rounded-lg p-6 shadow-xl bg-white w-[350px]">
            <Link to={`/products/${id}`}>
                <img src={image} alt={name} className="w-[400px] h-auto rounded-lg shadow-xl"/>
                <h2 className="text-lg font-bold mt-2">{name}</h2>
                <p className="text-md text-gray-600">Rs.{price}</p>
            </Link>
            <button 
                onClick={handleAddToCart}
                className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard;

