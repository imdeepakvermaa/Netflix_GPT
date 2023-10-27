import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfo } from "@fortawesome/free-solid-svg-icons";

const VideoDataBg = ({ title, overview }) => {
  return (
    <div className="absolute flex  items-center h-[750px] text-white ">
      <div className="px-[50px] h-screen flex flex-col justify-center  bg-gradient-to-r from-black  ">
        <h1 className="font-bold text-7xl">{title}</h1>
        <p className="w-1/4 mt-5">{overview}</p>
        <div className="pt-8">
          <button className="mr-4 h-[45px] w-[120px] font-bold text-xl  bg-white text-black rounded-lg text-center">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="h-[45px] w-[180px] font-bold text-xl  bg-gray-700 text-white rounded-lg text-center">
            <FontAwesomeIcon className="text-sm" icon={faInfo} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDataBg;
