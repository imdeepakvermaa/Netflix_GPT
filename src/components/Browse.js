import { signOut } from "firebase/auth";
import { LogoUrl } from "../utils/Urls";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
    const navigate = useNavigate();


    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigate("/")
          }).catch((error) => {

            navigate("/error")
            

          });
    }
    return (
        <div className=" flex items-center h-[70px] bg-black ">
            <div className="text-white flex flex-row  ml-[50px]   ">
                <img className="h-[60px] w-[120px] mr-7" src={LogoUrl} alt="Logo" />
                <div className="flex gap-6 text-sm mt-5">
                    <h4 className="font-bold">Home</h4>
                    <h4>TV Shows</h4>
                    <h4>Movies</h4>
                    <h4>New & Popular</h4>
                    <h4>My List</h4>
                    <h4>Browse by Languages</h4>
                </div>

                <div className=" text-white text-sm ml-[640px]  mt-5"> 
                    <div className="flex flex-row justify-center items-center ">
                    <img className="h-[30px] w-[30px]" src="https://avatars.githubusercontent.com/u/111647177?v=4" alt="profile" />
                        <h4 className="cursor-pointer font-bold" onClick={handleSignOut}>(Sign out)</h4>
                    </div>


                </div>
            </div>
        </div>
    );

};


export default Browse;