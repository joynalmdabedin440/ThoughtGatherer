import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home.jsx';
import Blogs from './components/Blogs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          
          <Route path='/' element={<Home />} />

          <Route path='blogs' element={<Blogs></Blogs>} />
          <Route path='bookmarks' element={<div>Bookmarks</div>} />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
