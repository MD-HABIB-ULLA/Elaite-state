import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const Authcontext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true); // Set loading state to true

    // Construct an object with the fields you want to update
    const profileData = {};
    if (displayName) {
      profileData.displayName = displayName;
    }
    if (photoURL) {
      profileData.photoURL = photoURL;
    }
    // Add other fields as needed

    // Update user profile using Firebase Auth method
    return updateProfile(auth.currentUser, profileData)
      .then(() => {
        // Profile updated successfully
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        // An error occurred while updating the profile
        console.error("Error updating user profile:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false
      });
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
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    );

    return unsubscribe; // Return the unsubscribe function for cleanup
  }, []);

  console.log(user);
  const authinfo = {
    creatNewUser,
    signInUser,
    user,
    loading,
    signOutUser,
    setLoading,
    updateUserProfile,
  };
  return (
    <>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </>
  );
};

export default AuthProvider;
