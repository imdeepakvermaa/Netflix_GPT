import { signOut } from "firebase/auth";
import { ProfileImgURL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const BrowseHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex">
      <div className="flex gap-4 text-sm mt-5 text-white">
        <h4 className="font-bold">Home</h4>
        <h4>TV Shows</h4>
        <h4>Movies</h4>
        <h4>New & Popular</h4>
        <h4>My List</h4>
        <h4>Browse by Languages</h4>
      </div>

      <div className=" text-white text-sm ml-[500px]  mt-5">
        <div className="flex flex-row justify-center items-center ">
          <div className="">
            {showGptSearch && <select
              className="w-20 h-8 bg-blue-500 rounded-xl mr-4 text-center "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
          </div>
          <button
            className="w-28 h-8 font-bold bg-purple-700 rounded-xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="ml-4 h-[30px] w-[30px]"
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
