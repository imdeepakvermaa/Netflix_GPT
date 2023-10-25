import { LogoUrl } from "../utils/Urls";
import validateData from "../utils/validate";
import { auth } from "../utils/firebase";
import { useState , useRef} from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage , setErrorMessage] = useState(null);
  const [isSignInForm , setIsSignInForm] = useState(true);

  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email?.current?.value; 
    const passwordValue = password?.current?.value;
    const displayName = name?.current?.value;
 

    const message = validateData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, emailValue, passwordValue  )
      .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName , photoURL: "https://avatars.githubusercontent.com/u/111647177?v=4"
        }).then(() => {
          const {uid , email , displayName , photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: photoURL ,}));
          navigate('/browse');

        }).catch((error) => {
          setErrorMessage(message);

        });
        console.log(user);
        
        navigate('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " +  errorMessage)
    });

    }

    else{
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
        navigate('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage)
      });

    }
  };

    


  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);

  };

  return (
    <div className=" flex flex-col justify-start items-start" >
      <div
        className="h-[1100px] w-full cover bg-cover bg-gradient-to-r from-gray-700 to-gray-500 relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <div className="w-full ml-5 mt-1">
          <img className="h-[90px]" src={LogoUrl} alt="logo"/>
        </div>

        <div className="flex justify-center items-center">
          <div className=" h-[640px] w-[450px] bg-black bg-opacity-70">
            <h1 className="text-white text-3xl font-medium pl-[70px] pb-[30px] pt-[50px] ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <div className="flex flex-col justify-center items-center">
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col ">

                    {!isSignInForm && <input
                      ref={name}
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md p-4 mb-6 dark:text-white"
                      type="text"
                      placeholder="Full Name"
                    />}

                    <input
                      ref={email}
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md p-4 dark:text-white"
                      type="text"
                      placeholder="Email or phone number"
                    />
                    
                    <br />
                    <input
                    ref={password}
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md  p-4 dark:text-white"
                      type="text"
                      placeholder="Password"
                    />
                    <p className="text-red-500 font-medium mb-10">{errorMessage}</p>
                    <button className="w-[314px] h-12 text-center text-white bg-red-600 rounded-md text-lg md:text-xl font-medium dark:text-white" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </button>
                  </form>
                  
                  <span className="mt-2 text-gray-400 hover:underline cursor-pointer text-sm">Need help?</span>
            </div>
            
            <div className="pl-[60px]">
              <div className="text-white flex flex-row mt-8">
                <h5 className="text-gray-400" >{isSignInForm ? "New to Netflix?" : "Already Registered?"}</h5>
                <h5 className="ml-1 cursor-pointer hover:underline" onClick={toggleSignUpForm}>{isSignInForm ? "Sign Up now." : "Sign In now."}</h5>
              </div>

              <div className="w-[280px] text-white flex flex-row  mt-4">
                <p className="text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-[265px] bg-black bg-opacity-70 mt-[100px]">
          <div className="">
            <h1 className=" text-gray-500 pb-8 pt-8">Questions? Call 000-800-919-1694  </h1>
            <div className="text-gray-500 flex flex-row gap-[120px] text-sm ">
              <h4>FAQ</h4>
              <h4>Help Center</h4>
              <h4>Terms of use</h4>
              <h4>privacy</h4>
            </div>
            <div className="text-gray-500 flex flex-row gap-[120px] text-sm mt-6 ">
              <h4>Corporate Information</h4>
              <h4>cookies preferences</h4>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
};

export default Login;
