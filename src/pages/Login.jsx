import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (existingUser) {
      localStorage.setItem("loggedInUser", email);
      setMessageColor("green");
      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/home");
      }, 800);
    } else {
      setMessageColor("red");
      setMessage("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">CAMPUS CODER HUB</h2>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p style={{ color: messageColor }}>{message}</p>

        <p>
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;