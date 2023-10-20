import { LogoUrl } from "../utils/Urls";

const Login = () => {
  return (
    <div className="h-[700px] w-full md:h-screen md:w-screen bg-cover bg-gradient-to-r from-gray-700 to-gray-500 relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)' }}>
  
      <div className="w-full ml-8">
        <img className="h-[90px]" src={LogoUrl} alt="logo" />
      </div>
    </div>
  )
}

export default Login;