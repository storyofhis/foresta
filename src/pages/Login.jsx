import React from "react";

const Login = (props) => {
  const { email, password, setEmail, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;
  return (
    <div>
      <section>
        <label>Username</label>
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>{emailError}</p>
        <label>Password</label>
        <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>{" "}
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Login;
