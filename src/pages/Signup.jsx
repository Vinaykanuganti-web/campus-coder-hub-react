import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(
      (user) => user.email === email
    );

    if (alreadyExists) {
      setMessage("Email already exists");
      return;
    }

    const newUser = {
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setMessage("Signup Successful");

    navigate("/");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Signup</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSignup}>
        Signup
      </button>

      <p>{message}</p>

      <p>
        Already have an account?
        <Link to="/"> Login</Link>
      </p>
    </div>
  );
}

export default Signup;