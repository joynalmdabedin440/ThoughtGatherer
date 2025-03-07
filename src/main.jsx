import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home.jsx';
import Blogs from './components/Blogs.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import Bookmarks from './components/Bookmarks.jsx';
import { ToastContainer, toast } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >

          <Route path='/' element={<Home />} />

          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          
          <Route path="/blog/:blogId" element={<BlogDetails />} >
            <Route path="" element={<Content></Content>}></Route>
            <Route path="author" element={<Author/>}/>
          
          
          </Route>

          <Route path='bookmarks' element={<Bookmarks/>} />

        </Route>

      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>,
)
