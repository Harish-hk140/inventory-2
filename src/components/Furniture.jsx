import React from "react";
const Furniture=()=>{
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
   <nav className="w-full max-w-6xl shadow-lg flex justify-between items-center border-2 border-black rounded-3xl px-6 py-3 mb-10">
    <div className="text-2xl font-bold text-black">WALMART</div>
<div className="flex gap-10 text-lg font-medium">
<button>Products</button>
<button>Orders</button>
<button>Cart(0)</button>
<button>Log in</button>
<button>sign up</button>
</div>
</nav>
</div>
</>
  );
}
export default Furniture;


