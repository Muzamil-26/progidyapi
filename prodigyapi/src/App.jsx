import React, { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Navbar from './components/Navbar';
// import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer';


const App = () => {
  // useEffect(()=>{
  //   // const locomotiveScroll = new LocomotiveScroll();
  // },[]);


  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<Docs/>}/>

      </Routes>

      <Footer/>
    </div>
  )
}

export default App
