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
    <header className="header">
      <div className="logo">Ascent Intelligent Technologies</div>

      <nav className="navigation">
        <a href="/">HOME</a>
        <a href="ABOUT">ABOUT </a>
        <a href="BLOG">BLOG</a>
        <a href="CONTACT">CONTACT</a>
      </nav>

      <div className="links">
      <ul className="navbar-nav ml-auto">
                    {loginStatus ? (
                        <li className="nav-item">
                            <Link  onClick={onLogoutHandler}>
                                Logout
                            </Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link  to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
      </div>
    </header>
  );
};

export default Navbar;
