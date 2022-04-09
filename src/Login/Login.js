import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

  return (
    <div>
      <h2>This is login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign in </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <input
          type="email"
          name=""
          placeholder="Your email"
          id="login-email"
          autoComplete="user-email"
        />
        <br />
        <input
          type="password"
          name=""
          autoComplete="current-password"
          placeholder="Password"
          id="login-password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
