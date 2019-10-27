import React from 'react';
import "./Login.css";
import { Link, Redirect } from 'react-router';
import { post } from '../../api/post';
import TokenComponent from '../../api/TokenComponent';
function Login() {

    const [loggedin, setLoggedin] = React.useState(false);
    const [form, setForm] = React.useState({
        password: '',
        login: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await post(form, '/login', 'post');
        TokenComponent.setToken(await response.token);
        TokenComponent.setUserId(await response.id);
        if (TokenComponent.getToken()) {
            setLoggedin(true);
            window.location.reload();
        }
        
        

        
        
        
        
        
    }


    const handleChange = (event) => {
        event.persist();
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    };

    return (
        <div className="Login">
            <div class="wrapper fadeInDown">
                <div id="formContent">

                    <div class="fadeIn first">
                        <h2>Login</h2>
                    </div>


                    <form>
                        <input type="text" id="login" onChange={handleChange} class="fadeIn second" name="login" placeholder="login" />
                        <input type="password" onChange={handleChange} id="password" class="fadeIn third" name="password" placeholder="password" />
                        <input type="submit" id="loginbutton"  onClick={handleSubmit} class="fadeIn fourth" value="Log In" />
                    </form>


                    <div id="formFooter">
                        <Link id="home" class="nav-link" to="/Register"> <span class="sr-only">Register</span></Link>
                    </div>

                </div>
            </div>
            {loggedin ? <Redirect to="/Account" /> : null }
        </div>
    );
}

export default Login;
