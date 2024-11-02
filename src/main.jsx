import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import Home from './Pages/Home';
import Coffee from './Pages/Coffee';
import Dashboard from './Pages/Dashboard';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      

    ]
   
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {routes}></RouterProvider>
  </StrictMode>,
)
