import React from 'react';
import "./Navbar.css";
import "../../App.js";
import { Link } from "react-router-dom";
import TokenComponent from '../../api/TokenComponent';

function Navbar() {
    
    
    // setToken(TokenComponent.getToken());
    console.log("coolkid");
    const [form, setForm] = React.useState({
            accountRoute: '/Login',
            accountNav: 'Login',
            registerRoute: "/Register",
            registerNav: "Register"
    });
    const [stockPage, setStockPage] = React.useState(false);
    
    React.useEffect((token) => {
        
        
        console.log("Updated token");
        console.log(TokenComponent.getToken());
        if (TokenComponent.getToken()) {
            setForm({
                accountRoute: "/Account", accountNav: "Account", registerRoute: "/Logout",
                registerNav: "Logout" });
            setStockPage(true);
        }
        
    }, []);
    
    
    return (
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link class="navbar-brand" to="home">Investment</Link>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link id="home" class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                           {stockPage ? <Link class="nav-link" to="/Stocks">Stocks</Link> : null}
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">My Account</a>
                        </li> */}
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link id="navlogin" class="nav-link" to={form.accountRoute}>{form.accountNav}<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link id="register" class="nav-link"  to={form.registerRoute}>{form.registerNav} <span class="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
