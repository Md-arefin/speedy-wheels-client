import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import AuthProvider from './Provider/AuthProvider';
import { router } from './Routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto'>
    
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
)
