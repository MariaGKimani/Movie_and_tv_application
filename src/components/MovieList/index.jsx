import React, {useState, useEffect} from "react"
import { getMovies} from "../../utils/utilities";
import './style.css';
import ImageConatiner from "../../atoms/Image-container";
import SearchBar from "./searchbar";


const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        (async () =>{
            const movies = await getMovies();
            setMovies(movies.results);
            setLoading(false);
            console.log({movies});
        })()
    }, []);
    if(loading){
        return <h1>Loading....</h1>
    }
    return(
        <div>
        <SearchBar/>
        <div className="image-container"> 
         {movies &&
         loading === false &&
         movies.length > 0 &&
         movies.map((item) => (
            <ImageConatiner props={item}/>
         ))}
        </div>
            
        </div>
    );
};
export default MovieList;













