import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Loginpage from "../Pages/Loginpage";
import { useLocation } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
  };

  return (
    <nav className="navbar navbar-expand mr-2 navbar-light ">
      <a className="navbar-brand" href="#">
        Ascent Intelligent Technologies
      </a>
     

      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="ABOUT">
              ABOUT
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="CONTACT">
              CONTACT
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="BLOG">
              BLOG
            </a>
          </li>

          <li className="nav-item">

          
            <a className="btn lg-2 mr-sm-2 my-2 my-sm-0  " href="BLOG">
            {loginStatus ? (
              <li className="nav-item ">
                <Link onClick={onLogoutHandler}>Logout</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            )}
              

            </a>
          </li>

          

          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
