import React, { useState } from "react";
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [repeatpass, setRepeatPass] = useState(''); // Unique name for the repeat password

    const handleSubmit = () => {
        // e.preventDefault();
        // console.log(email);
        if (email.length === 0) {
            alert("Email is left blank");
        } else if (name.length === 0) {
            alert("Name is left blank");
        } else if (pass.length === 0) {
            alert("Password is left blank"); // Updated error message
        } else if (pass !== repeatpass) {
            alert("Passwords do not match"); // Added password confirmation check
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
                        window.alert("Registration failed");
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
                <label htmlFor="repeatpass">confirm password</label> 
                <input value={repeatpass} onChange={(e) => setRepeatPass(e.target.value)} type="password" placeholder="***************" id="repeatpass" name="repeatpass" /> 
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
} 
export default Register;
/* import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setSubmitting(true);


    try {
      const response = await fetch('http://localhost/php-react/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&name=${name}&pass=${password}&repeatpass=${repeatPassword}`,
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setEmail('');
        setName('');
        setPassword('');
        setRepeatPassword('');
      } else {
        setErrorMessage('Registration failed. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        background: 'linear-gradient(to right, #f2f2f2, #c6c6c6)' 
      }}>
      <div style={{ 
          width: '60%', 
          padding: '20px', 
          border: '1px solid #333', 
          borderRadius: '15px', 
          background: 'linear-gradient(to right, #f2f2f2, #c6c6c6)',
          color: '#333'
        }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#333'
        }}>Register</h1>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{color: '#333'}}>Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" style={{color: '#333'}}>Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{color: '#333'}}>Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword" style={{color: '#333'}}>Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="repeatPassword" 
              placeholder="Repeat your password" 
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{padding: '10px', width: '100%', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold'}}
            disabled={submitting}
          >
            {submitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;*/