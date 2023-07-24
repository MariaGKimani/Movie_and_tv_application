import React, { useEffect, useState } from "react";
import { useParams } from "react-router";



const MovieDetails =()=>{
const [title,setTitle] = useState('')
const [id,setId] = useState('')
    return(
        <div>
            <p>
                {/* {movie.name} */}
                Movie name
            </p>
            <p>
                Movie 
            </p>
        </div>
    )



}
export default MovieDetails;