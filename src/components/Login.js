import { LogoUrl } from "../utils/Urls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  


  return (
    <div className=" flex flex-col justify-start items-start" >
      <div
        className="h-[900px] cover w-full md:h-[1100px] md:w-screen bg-cover bg-gradient-to-r from-gray-700 to-gray-500 relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <div className="w-full ml-5 mt-1">
          <img className="h-[90px]" src={LogoUrl} alt="logo" />
        </div>

        <div className="flex justify-center items-center">
          <div className=" h-[640px] w-[450px] bg-black bg-opacity-70">
            <h1 className="text-white text-3xl font-medium pl-[70px] pb-[30px] pt-[50px] ">Sign In</h1>
            <div className="flex flex-col justify-center items-center">
                  <form className="">
                    <input
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md mb-4 p-4"
                      type="text"
                      name="email"
                      placeholder="Email or phone number"
                    />
                    <br />
                    <input
                      className="w-[314px] h-[50px] bg-gray-600 rounded-md mb-10 p-4 dark:text-white"
                      type="text"
                      name="password"
                      placeholder="Password"
                    />
                  </form>
                  <button className="w-[314px] h-12 text-center text-white bg-red-600 rounded-md text-lg md:text-xl font-medium dark:text-white">
                    Sign In
                  </button>
                  <span className="mt-2 text-gray-400 hover:underline cursor-pointer text-sm">Need help?</span>
            </div>
            
            <div className="pl-[60px]">
              <div className="text-white flex flex-row mt-8">
                <h5 className="text-gray-400">New to Netflix?</h5>
                <h5 className="ml-1 cursor-pointer hover:underline" onClick={navigateHome}>Sign up now.</h5>
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
