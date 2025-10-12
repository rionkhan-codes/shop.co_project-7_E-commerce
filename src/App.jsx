
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ProductDetail } from './pages/ProductDetail'
import { AddToCart } from './pages/AddToCart'
import { Category } from './pages/Category'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { ClothCategory } from './pages/ClothCategory'

function App() {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element ={<LayoutOne/>}>
    <Route index element = {<Home/>}/>
    <Route path='/productDetails/:productID' element ={<ProductDetail/>}/>
    <Route path='/addCart' element={<AddToCart/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/clothCategory' element={<ClothCategory/>}/>
    </Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
  </Route>
))
  return (
   <>
   <RouterProvider router={myRoute}/>
   </>
  )
}

export default App
