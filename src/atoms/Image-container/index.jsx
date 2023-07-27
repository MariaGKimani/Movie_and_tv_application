import React from "react";
import './style.css'
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const ImageContainer = ({props,useBackground}) => {
  
  if (useBackground) {
    const styleB = {
      backgroundImage: `url(${IMAGE_BASE_URL}${props.poster_path})`,
    }
     return (
        <div className='image-container-background' style={styleB} key={props.id}>
          <h2>{props.title}</h2>
          <p>{props.overview}</p>
          <p>Release Date: {props.release_date}</p>
        </div>
      );
    }
    else{
      return(
        <div key={props.id} className="images" >
      <img
      src={`${IMAGE_BASE_URL}${props.poster_path}`}
      alt= {props.title}/>
    
    </div>
  )
    }

}
export default ImageContainer;