import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../firebase.init";
// import useFirebase from "../Hooks/useFirebase";
import "./Home.css";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  //   const { user } = useFirebase();
  // const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return <div>{user?.uid ? user.displayName : "no Body"}</div>;
};

export default Home;
