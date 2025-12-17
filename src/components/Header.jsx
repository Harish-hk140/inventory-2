const Header=()=>{
    return(
        <header className="w-full bg-gray-500 mb-3 shadow-lg text-white p-4">

            <nav className="flex gap-30 text-md font-bold text-black justify-center items-center">
                <a href='/' >HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/contact">CONTACT</a>
                <a href="/Products">PRODUCTS</a>
                <a href="/Cart">Cart</a>
                <a href="/Login">LOGIN</a>
                
            </nav>
        </header>
    )
}

export default Header;