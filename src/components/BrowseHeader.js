
import { signOut } from "firebase/auth";
import { ProfileImgURL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate} from "react-router-dom";

const BrowseHeader = () => {

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {

            navigate("/error")
            

          });
    }
  return (


    <div className="flex w-full ">
      <div className="flex gap-6 text-sm mt-5 ml-6 text-white">
        <h4 className="font-bold">Home</h4>
        <h4>TV Shows</h4>
        <h4>Movies</h4>
        <h4>New & Popular</h4>
        <h4>My List</h4>
        <h4>Browse by Languages</h4>
      </div>

      <div className=" text-white text-sm ml-[600px]  mt-5">
        <div className="flex flex-row justify-center items-center ">
          <img
            className="h-[30px] w-[30px]"
            src={ProfileImgURL}
            alt="profile"
          />
          <h4 className="cursor-pointer font-bold" onClick={handleSignOut}>
            (Sign out)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
