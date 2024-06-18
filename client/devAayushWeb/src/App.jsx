import React from 'react';
import PostList from './components/PostList';
import PostDetails from './components/postDetails';
import AboutUsPage from './UI/AboutUs';
import ServicesPage from './UI/services';
import ContactUsPage from './UI/ContactUs';
import HomePage from './UI/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Footer from './UI/Footer';
import AnimatedText from '../src/UI/intro';
import './App.css'

function App() {
  return (
    <>
       
    <div>
     <Router>
     <Navbar/>
    
     
     <AnimatedText/>
      <Routes>
      {/* <Route path="/publish" element={<PostForm />} /> */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path='/home' element={<PostList/>} />
          <Route path='/post/:id' element={<PostDetails/>} />
      </Routes>
      </Router>
     
     
      
    
     <Footer/>
     
    </div>
     
    </>
  )
}


export default App
