import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../firebase.init";
const auth = getAuth(app);
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  //   const { signInWithGoogle } = useFirebase();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const handleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h2>This is login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={handleSignIn}>Google Sign in </button>
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
