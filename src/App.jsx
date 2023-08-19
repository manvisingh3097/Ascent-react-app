import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/maincontainer';
import Loginpage from './Pages/Loginpage';
import './index.css';
import RegisterPage from './Pages/Registerpage';
import AboutPage from './Pages/aboutpage';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<MainContainer />} />
         <Route path='/login' element={<Loginpage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/about' element={<AboutPage />} />

       </Routes>
      </BrowserRouter>
      
      
      
      
    </div>

    
  );
}

export default App;
