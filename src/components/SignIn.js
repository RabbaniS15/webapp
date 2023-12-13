
import React, { useState } from "react";
import { auth, firebaseApp } from "../Firebase";  // Import the initialized app
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";

const SignIn = () => {
  console.log("SignIn component rendering...");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Attempting sign-in...");

    try {
      const authInstance = getAuth(firebaseApp);  // Use the initialized app
      await signInWithEmailAndPassword(authInstance, email, password);
      console.log("Sign-in successful");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="container">
      <div className="banner">
        <h2>welcome to the sign in page of Elementure</h2>
        <h3>lets start</h3>
      </div>
      <form autoComplete="off">
        <div className="signIn">
          <h2>Sign In with gmail</h2>
          <span className="p-float-label">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              style={{ width: "100%" }}
              autoComplete="email"
            />
            <label htmlFor="email">Username</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              style={{ width: "100%" }}
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
          </span>

          <Button
            label="Submit" 
            onClick={(e) => handleSignIn(e)}
            style={{ borderRadius: "30px", marginTop: "10px" }}
          />  
        </div>
      </form>
    </div>
  );
};

export default SignIn;
