import React from 'react';
import "./Register.css";
import {post} from '../../api/post';
import { Link } from 'react-router';

function Register() {
    const [form, setForm] = React.useState({
        password: '',
        login: '',
        email: '',
        stocks: []
    });


    const handleChange = (event) => {
        event.persist();
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
        console.log(form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(form, '/register', 'post');
    }
    return (
        <div className="Register">
            <div class="wrapper fadeInDown">
                <div id="formContent">

                    <div class="fadeIn first">
                        {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
                        <h2>Register</h2>
                    </div>


                    <form>
                        <input type="text" id="login" onChange={handleChange} class="fadeIn second" name="login" placeholder="Login" />
                        <input type="Email" id="email" onChange={handleChange} class="fadeIn second" name="email" placeholder="Email" />
                        <input type="Password" id="password" onChange={handleChange} class="fadeIn third" name="password" placeholder="Password" />
                        <input type="submit" onClick={handleSubmit} class="fadeIn fourth" value="Register" />
                    </form>


                    <div id="formFooter">
                        <Link id="login" class="nav-link" to="/Login"> <span class="sr-only">Login</span></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;
