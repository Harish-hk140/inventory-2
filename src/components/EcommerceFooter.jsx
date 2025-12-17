const EcommerceFooter=()=>{
  return (
    <>
     <footer className="flex-col bg-yellow-500  text-black text-bold py-6 mt-4 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">  2025 Navi shoping. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </div>
        </div>
      </footer>
    </>

  )
};
export default EcommerceFooter;