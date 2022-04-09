import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((e) => console.error(e.message));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((e) => console.log(e));
  };
  useEffect(
    onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
      },
      []
    )
  );
  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
