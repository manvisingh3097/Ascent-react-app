import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/maincontainer';
import Loginpage from './Pages/Loginpage';
import './index.css';
import RegisterPage from './Pages/Registerpage';
import AboutPage from './Pages/aboutpage';
import contact from './Pages/contact';
import Homepage from './Pages/Homepage';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<MainContainer />} />
         <Route path='/login' element={<Loginpage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/about' element={<AboutPage />} />
         <Route path='/homepage' element={<Homepage />} />
         <Route path='/contact' element={<contact />} />

       </Routes>
      </BrowserRouter>
      
      
      
      
    </div>

    
  );
}

export default App;
