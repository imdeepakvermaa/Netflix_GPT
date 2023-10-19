import { LogoUrl } from "../utils/Urls";
import HeaderScroll from "./HeaderScroll";

const Header = () => {
  return (
    <>
    <div className="absolute h-[900px]">
        <div className="flex gap-[900px]">
          <img className="h-[80px] ml-[150px] font-b" src={LogoUrl} alt="logo" />
          <button className="h-8 w-[80px] mt-6 text-center text-sm text-white font-medium bg-red-600 rounded-md">
          Sign In
          </button>
        </div>
        <div className="flex justify-center ml-[210px] mt-[160px]">
          <div>
              <h2 className="text-center font-extrabold text-white text-5xl mb-2 ">The biggest Indian hits. The best Indian stories.</h2>
              <h2 className="text-center font-extrabold text-white text-5xl mb-7 ">All streaming here.</h2>
              <h5 className="text-center text-white text-2xl mb-7">Watch anywhere. Cancel anytime.</h5>
              <h3 className="text-center text-white text-xl ">Ready to watch? Enter your email to create or restart your membership.</h3>

              <input type="text" placeholder="Email address" className="ml-[270px] h-[55px] w-[380px] rounded-lg bg-transparent border text-white border-red-500 hover:border-green-500"/>

              <button className="h-[55px] w-[200px] ml-2 mt-6 text-center  text-white bg-red-600 rounded-md text-2xl font-bold">
              Get Started 
              </button>

          </div>
        </div>
    </div>

    <div>
      <HeaderScroll />
    </div>
    

    </>

    


  );
};

export default Header;
