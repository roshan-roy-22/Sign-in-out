import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const navigate=useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userCredential.user);
      // Update user's display name with the provided username
      await updateProfile(userCredential.user, {
        displayName: registerUsername,
      });
      const newUser = userCredential.user;
      console.log(newUser);
      navigate('/landing')
    } catch (error) {
      toast.error('Invalid User Credentials', {
        duration: 1000, 
        transitionDuration: 300,
        ariaLive: 'assertive',
      });
      console.error("Error during registration:", error);
    }
  };
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-screen bg-gray-700">
        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
          <form class="flex flex-col" onSubmit={handleRegistration}>
            <input
              onChange={(e) => setRegisterUsername(e.target.value)}
              placeholder="Username"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />

            <input
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
            />

            <input
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
            />

            <p class="text-white mt-4">
              Already have an account?
              <Link
                to={"/"}
                class="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Login
              </Link>
            </p>
            <button
              class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Register;
