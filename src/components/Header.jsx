import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [loginStatus , setLoginStatus] = useState(false);
    const navigate = useNavigate();
    

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginStatus(false);
        }
        else{
            setLoginStatus(true);
        }
    }, [loginStatus]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand" to="/">
                <text style={{ color: 'blue', fontSize: 30 }} >Ascent Intelligent Technologies</text>
                
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"

            >
                <span className="navbar-toggler-icon">
                    
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {loginStatus ? (
                        <li className="nav-item">
                            <Link className="nav-link btn btn-danger" onClick={onLogoutHandler}>
                                Logout
                            </Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link btn btn-primary " to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        <div className="m-lg-auto ">
            <div className="container">
                
                        
                    </div>
              
            </div>
            <div className="container">
                
            </div>
            
        </nav>
    );
};

export default Navbar;