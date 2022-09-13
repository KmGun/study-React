import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function Home(){
    const [loading,setLoading] = useState(true);
    const [movieDatas,setMovieDatas] = useState([1,2,3]);
    const getMovies = async () =>{
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setMovieDatas(json.data.movies);
        console.log(json.data.movies)
        setLoading(false);
        
    }

    useEffect(()=>{
        getMovies();
    },[])
    
    return(
        <>
            <h1>This is Movies</h1>
            {!loading ? movieDatas.map((each,index) => 
                <Movie 
                    key = {index}
                    id = {each.id}
                    url = {each.url}
                    title = {each.title}
                    summary = {each.summary}
                    medium_cover_image = {each.medium_cover_image}
                ></Movie>
            ): <h2>Loading...</h2>}
        
        </>

    )
};

export default Home;
