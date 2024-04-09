import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const Authcontext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  console.log(user);
  const authinfo = { creatNewUser, signInUser, user, loading, signOutUser, setLoading };
  return (
    <>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </>
  );
};

export default AuthProvider;
