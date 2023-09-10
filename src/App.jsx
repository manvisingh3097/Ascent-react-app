import React, { useState  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/maincontainer';
import Loginpage from './Pages/Loginpage';
import './index.css';
import RegisterPage from './Pages/Registerpage';
import AboutPage from './Pages/aboutpage';
import Contactpage from './Pages/Contactpage';
import Homepage from './Pages/Homepage/Homepage';
import Blogpage from './Pages/Blogpage';
import Mainpage from './Pages/Mainpage';





function App() {

  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLoginSubmit = () => {
  //   setLoggedIn(true);
  // };
  
  return (

    
    <div className="app">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<MainContainer />} />
         <Route path='/login' element={<Loginpage />} />
         <Route path='/mainpage' element={<Mainpage />} />
         <Route path='/register' element={<RegisterPage />} />
         <Route path='/about' element={<AboutPage />} />
         <Route path='/homepage' element={<Homepage />} />
         <Route path='/blog' element={<Blogpage />} />
         <Route path='/contact' element={<Contactpage />} />


       </Routes>
      </BrowserRouter>
      
      
      
      
    </div>

    
  );
}

export default App;
