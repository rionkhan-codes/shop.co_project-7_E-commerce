
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './layout/LayoutOne'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element ={<LayoutOne/>}>
    <Route index element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    </Route>
  </Route>
))
  return (
   <>
   <RouterProvider router={myRoute}/>
   </>
  )
}

export default App
