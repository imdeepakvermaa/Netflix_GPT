import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoDataBg from "./VideoDataBg"

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies)
    if (!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title , overview , id} = mainMovie;
    return (
        <div>
            <VideoDataBg title={original_title} overview={overview}/>
            <VideoBackground movieId={id} />
            
        </div>
    )
}

export default MainContainer
