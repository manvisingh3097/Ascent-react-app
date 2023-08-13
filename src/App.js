import {useParams } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import './index.css';
import Homepages from "./Pages/Homepage";
function App() {
  const catName = useParams();
  return (
   <Router>
      <Routes>
         <Route path="/login" element={<Loginpage />} />
         <Route path="/register" element={<Registerpage />} />
         <Route path="/" element={<Homepages />} />
      </Routes>
   </Router>
  );
}

export default App;
