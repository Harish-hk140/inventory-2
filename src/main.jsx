import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomeLayout from './layout/HomeLayout.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminPage from './components/AdminPage.jsx'
import { ToastContainer } from 'react-toastify'


const products = [
  
  {
    "id": 1,
    "name": "Product 1",
    "price": 2000,
    "image": "https://picsum.photos/id/1/200"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 2000,
    "image": "https://picsum.photos/id/26/200"
  },
  // {
  //   "id": 3,
  //   "name": "product 3",
  //   "price": 3000,
  //   "image": "https://picsum.photos/id/30/200"
  // }
]

createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer/>
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<App />} />
        <Route path="/products">
          <Route index element={<ProductList products={products} />} />
          <Route path=':id' element={<ProductDetails />} />
          <Route path='details' element={<ProductList />} />
        </Route>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Route>

      <Route path='/login' element={<LoginForm />} />
      <Route path='/adminpage'
        element={<ProtectedRoute> <AdminPage /> </ProtectedRoute>} />
    </Routes>

  </BrowserRouter>

  </>


)




