import {useParams } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import './index.css';
function App() {
  const catName = useParams();
  return (
   <Router>
      <Routes>
         <Route path="/login" element={<Loginpage />} />
         <Route path="/register" element={<Registerpage />} />
      </Routes>
   </Router>
  );
}

export default App;
