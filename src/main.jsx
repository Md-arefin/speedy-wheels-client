import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto lg:px-20 md:px-10 sm:px-2 px-4'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
