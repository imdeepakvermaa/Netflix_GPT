import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BgImageURL, ProfileImgURL } from "../utils/constants";
import validateData from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const infoPage = () => {
    navigate("/");
  };


  const onChangeNeed = () => {
    navigate("/in");
  };


  const handleButtonClick = async () => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const displayName = nameRef.current ? nameRef.current.value : null;

    const message = validateData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        const user = userCredential.user;

        if (displayName) {
          await updateProfile(user, {
            displayName: displayName,
            photoURL: ProfileImgURL,
          });
        }

        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " " + errorMessage);
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-start items-start">
        <div
          className="h-[1100px] w-full cover bg-cover bg-gradient-to-r from-gray-700 to-gray-500 relative"
          style={{
            backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${BgImageURL})`,
          }}
        >
          <div className=" ml-7 mt-4">
            <Link to="/">
              <Header />
            </Link>
          </div>

          <div className="flex justify-center items-center mt-2">
            <div className="h-[640px] w-[450px] bg-black bg-opacity-70">
              <h1 className="text-white text-3xl font-medium pl-[70px] pb-[30px] pt-[50px] ">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              <div className="flex flex-col justify-center items-center">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col "
                >
                  {!isSignInForm && (
                    <input
                      ref={nameRef}
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md p-4 mb-6 dark:text-white"
                      type="text"
                      placeholder="Full Name"
                    />
                  )}
                  <input
                    ref={emailRef}
                    className="w-[314px] h-[50px] bg-gray-600 rounded-md p-4 dark:text-white"
                    type="text"
                    placeholder="Email or phone number"
                  />
                  <br />
                  <input
                    ref={passwordRef}
                    className="w-[314px] h-[50px] bg-gray-600 rounded-md p-4 dark:text-white"
                    type="password"
                    placeholder="Password"
                  />
                  <p className="text-red-500 font-medium mb-10 justify-center items-center">
                    {errorMessage}
                  </p>
                  <button
                    className="w-[314px] h-12 text-center text-white bg-red-600 rounded-md text-lg md:text-xl font-medium dark:text-white"
                    onClick={handleButtonClick}
                  >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </button>
                </form>
                <span className="mt-2 text-gray-400 hover:underline cursor-pointer text-sm" onClick={onChangeNeed}>
                  Need help?
                </span>
              </div>

              <div className="pl-[60px]">
                <div className="text-white flex flex-row mt-8">
                  <h5
                    className="text-gray-400 cursor-pointer"
                    onClick={onChangeNeed}
                  >
                    {isSignInForm ? "New to Netflix?" : "Already Registered?"}
                  </h5>
                  <h5
                    className="ml-1 cursor-pointer hover:underline"
                    onClick={toggleSignUpForm}
                  >
                    {isSignInForm ? "Sign Up now." : "Sign In now."}
                  </h5>
                </div>
                <div className="w-[280px] text-white flex flex-row  mt-4">
                  <p className="text-xs">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. Learn more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full h-[265px] bg-black bg-opacity-70 mt-[100px]">
            <div className="">
              <h1 className=" text-gray-500 pb-8 pt-8">
                Questions? Call 000-800-919-1694{" "}
              </h1>
              <div className="text-gray-500 flex flex-row gap-[120px] text-sm ">
                <h4>FAQ</h4>
                <h4>Help Center</h4>
                <h4>Terms of use</h4>
                <h4>Privacy</h4>
              </div>
              <div className="text-gray-500 flex flex-row gap-[120px] text-sm mt-6 ">
                <h4>Corporate Information</h4>
                <h4>Cookies Preferences</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
