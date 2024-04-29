import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validation";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [Errors, setErrors] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrors(message);

    if (message === {}) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              alert(error.message);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorCode + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <form
        onSubmit={formHandler}
        action=""
        className="w-3/12 bg-black absolute  top-[15%] mx-auto left-0 right-0 p-8 rounded-lg text-white bg-opacity-80 my-8"
      >
        <h1 className="text-3xl text-white font-bold text-left mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="my-2">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4  rounded-lg bg-gray-700 border-none outline-none "
            />
            <p className="text-red-700 text-left">{Errors?.name}</p>
          </div>
        )}
        <div className="my-2">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-2 rounded-lg bg-gray-700 border-none outline-none "
          />
          <p className="text-red-700 text-left">{Errors?.email}</p>
        </div>
        <div className="my-2">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-2 rounded-lg bg-gray-700 border-none outline-none"
          />
          <p className="text-red-700 text-left">{Errors?.password}</p>
        </div>
        <button className="text-white bg-red-700 w-full p-4 rounded-lg my-4 text-xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <h1 className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "Don't have an account ? Sign Up "
            : "Already have an account ? Sign In"}
        </h1>
      </form>
    </div>
  );
};

export default LoginForm;
