import React,{useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getCategories } from "../utils/utilities";
import ImageContainer from "../atoms/Image-container";
import "./style.css";



const MovieSlider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getCategories();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  // Setting  the limit of movies to display
  const limitMovie = movies.slice(0, 4);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="movies-slider">
      <Carousel
       {...sliderSettings}>
        {limitMovie.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackground={true} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default MovieSlider;