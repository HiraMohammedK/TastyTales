import React, { useState } from "react";
import './Login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'
import axios from 'axios'; // Import Axios for making HTTP requests

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost/php-react/login.php", credentials);

      if (response.data.status === 'success') {
        // Successful login, set session variables
        sessionStorage.setItem('user_id', response.data.user_id); // Replace with the actual key for user_id in the response
        sessionStorage.setItem('username', response.data.username); // Replace with the actual key for username in the response

        alert("Login Successful");
        console.log("Login Successful");
        navigate('/recipe-upload');
      } else {
        alert("Login Failed");
        console.log("Login Failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Input field for email */}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        {/* Input field for password */}
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="***************"
          id="password"
          name="password"
        />

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
