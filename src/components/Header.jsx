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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Ascent Intelligent Technologies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
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
        </ul>
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
      </div>
    </nav>
  );
};

export default Navbar;
