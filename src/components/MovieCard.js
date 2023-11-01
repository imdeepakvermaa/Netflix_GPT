import { Movie_Poster_Img_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-[160px]  hover:cursor-pointer  ">
      <img src={Movie_Poster_Img_CDN_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;
