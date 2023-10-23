import { LogoUrl } from "../utils/Urls";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const navigateSignIn = () => {
    navigate('/login');
  };

  return (
  <div className=" flex flex-col justify-start items-start">
    <div className="h-[700px] w-full cover md:h-[700px] bg-cover bg-gradient-to-r from-gray-700 to-gray-500 relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)' }}>
  
  <div className="w-full flex justify-center  items-center gap-[900px] p-4">
    <img className="h-[70px]" src={LogoUrl} alt="logo" />
    <button className="h-8 w-20 text-center text-sm text-white font-medium bg-red-600 rounded-md" onClick={navigateSignIn}>
      Sign In
    </button>
  </div>
  <div className="flex justify-center items-center h-full">
    <div className="mb-[170px]">
      <h2 className="text-center font-extrabold text-white text-4xl md:text-5xl mb-4">
        The biggest Indian hits. The best Indian stories.
      </h2>
      <h2 className="text-center font-extrabold text-white text-4xl md:text-5xl mb-4">
        All streaming here.
      </h2>
      <h5 className="text-center text-white text-xl md:text-2xl mb-4">
        Watch anywhere. Cancel anytime.
      </h5>
      <h3 className="text-center text-white text-lg md:text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-4">
        <input
          type="text"
          placeholder="Email address"
          className="w-full md:w-1/2 h-12 rounded-lg bg-transparent border text-white border-red-500 hover:border-green-500"
        />
        <button className="w-full md:w-1/4 h-12 text-center text-white bg-red-600 rounded-md text-lg md:text-xl font-bold">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Header;
