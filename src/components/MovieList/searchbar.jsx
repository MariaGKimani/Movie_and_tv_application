import React, { useState } from "react"
import "./style.css"
const SearchBar = () => {
    const [searchValue,setSearchValue] = useState("");

    const handleInput = (event)=>{
        setSearchValue(event.target.searchValue);
        console.log("I am typing",searchValue);

    }
    return(
        <div>
            <input
             className="search"
             type="text" 
             placeholder="Search" 
             value={searchValue} 
            onChange={handleInput}/>
            <button onClick={()=>
            console.log("I am typing")
        }>Search</button>
        
            </div>
    )   
        
};
export default SearchBar;