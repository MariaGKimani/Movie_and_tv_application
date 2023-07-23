import { getValue } from "@testing-library/user-event/dist/utils";

const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
export const getMovies = async () => {
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
           method: 'GET',
           headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
           }
        });
        const result = await response.json();
        console.log("result", result);
        return result;
        }
        catch(error){
            return error.message
        }
}
export const handleSearch=(searchValue)=>{
    if (!searchValue.trim()){

        getMovies();
    }
    else{
        try{
            const response =fetch(`${BASE_URL}/search/movie?query={searchValue}`,{
               method: 'GET',
               headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
               }
            });
            const result = response.json();
            console.log("result", result);
            return result;
            }
            catch(error){
                return error.message
            }
        }
    }
