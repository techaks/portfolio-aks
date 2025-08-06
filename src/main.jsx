import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <App />
 <ToastContainer/>
  </BrowserRouter>
   
 
)
