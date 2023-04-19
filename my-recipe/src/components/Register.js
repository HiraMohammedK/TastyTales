import React, { useState } from "react";
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
   

    const handleSubmit = () => {
        // e.preventDefault();
        // console.log(email);
        if (email.length === 0) {
            alert("Email is left blank");
        } else if (name.length === 0) {
            alert("Name is left blank");
        } else if (pass.length === 0) {
            alert("Name is left blank");
        } else {
            const url = "http://localhost/php-react/register.php";
            let fData = new FormData();
            fData.append('email', email);
            fData.append('name', name);
            fData.append('pass', pass);

            axios.post(url, fData)
    
                .then(response => {
                    
                    if (response.data.status === 'valid') {
                        window.alert("Registration successful");
                        console.log("Registration Successful");
                    } else {
                        alert("Registration failed!");
                    }
                })
                .catch(error => alert(error))
        }
    }

    return (
        <div className="auth-form-container">
            
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="name">name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="username" />
                <label htmlFor="pass">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***************" id="pass" name="pass" />
                <label htmlFor="pass">confirm password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***************" id="pass" name="pass" />

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}