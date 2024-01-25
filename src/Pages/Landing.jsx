import React, { useEffect, useState } from "react";
import "./Landing.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Landing = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [typeEffect] = useTypewriter({
    words: [user?.displayName],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Implement the logic to sign the user out
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 h-screen  bg-gray-900 text-white">
        <div className="grid place-items-center">
          <div>
            <h1 className="text-5xl max-sm:text-3xl">
              Welcome{" "}
              <span className="fixed ms-2 max-sm:text-3xl text-sky-300 text-6xl">
                {typeEffect}
              </span>
            </h1>
            <button className="comic-btn my-6" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-2/4" src="introduction.png" alt="no image" />
        </div>
      </div>
    </>
  );
};

export default Landing;
