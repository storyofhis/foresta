/* eslint-disable default-case */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import fire from "../config/firebase";

const authUser = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInput = () => {
    setEmail("");
    // setUsername("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    // setUsernameError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(e.message);
            break;
          case "auth/wrong-password":
            setPasswordError(e.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((e) => {
        switch (e.code) {
          case "auth/email-already-in-use":
          case "auth/email-invalid":
            setEmailError(e.message);
            break;
          case "auth/weak-password":
            setPasswordError(e.message);
            break;
        }
      });
  };

  const handleSignOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      {user ? (
        <>
          <Dashboard handleSignOut={handleSignOut} />
        </>
      ) : (
        <>
          <Login
            email={email}
            // username={username}
            password={password}
            setEmail={setEmail}
            // setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            // usernameError={usernameError}
            passwordError={passwordError}
          />
        </>
      )}
    </div>
  );
};

export default authUser;
