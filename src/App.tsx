// App.tsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Ukpage from './UkPages/Ukpage';
import Footer from './components/Footer';
import Newzealand from './NewZealand/Newzealand';
import Germany from './Germany/Germany';
// In your main entry file (e.g. App.tsx or main.tsx)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uae from './UAE/Uae';
import USA from './USA/USA';
import Ireland from './IreLand/Ireland';
import Australia from './Austrila/Austrila';
import Canada from './Canada/Canada';
import ContactUs from './components/Contactus/Contactus';
import TrendingBlog from './components/Blog/Blog';
import Services from './Services/Services';





function App() {
  useEffect(() => {
    document.title = "EduKonnect - Your Global Education Partner";
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gradient-to-br from-[#DFF1DC] to-[#DFF1DC]] min-h-screen">
      {/* Progress bar */}
    <motion.div 
  className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-700 via-green-500 to-green-600 z-50 rounded-t-3xl"
  style={{ scaleX, transformOrigin: '0%' }}
/>
 
<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
    {/* Move Progress Bar Inside Rounded Container */}
    <motion.div 
      className="h-2 bg-gradient-to-r from-green-700 via-green-500 to-green-600 z-50 rounded-t-3xl"
      style={{ scaleX, transformOrigin: '0%' }}
    />
    
    {/* Navbar must be placed after Progress Bar */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/uk" element={<Ukpage/>} />
      <Route path="/newzealand" element={<Newzealand/>} />
      <Route path="/germany" element={<Germany/>} />
      <Route path="/uae" element={<Uae/>} />
      <Route path="/usa" element={<USA/>} />
      <Route path="/ireland" element={<Ireland />} />
       <Route path="/australia" element={<Australia/>} />
       <Route path="/canada" element={<Canada/>} />
       <Route path="/contact" element={<ContactUs />} />  
       <Route path='/blogs' element={<TrendingBlog/>}/>
       
       <Route path='/services' element={<Services/>} />
      {/* Add other routes as needed */}
    </Routes>

    <Footer />
   
  </div>
</div>

    </div>
  );
}

export default App;