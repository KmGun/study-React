import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


function Movie({url,title,summary,medium_cover_image}){
    return (
        <div>
            <h2><a href={url}>{title}</a></h2>
            <p>{summary}</p> 
            <img src={medium_cover_image} alt="this is img!!"/>
        </div>
    )
}

Movie.propTypes = {
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
}

function Movies(){
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
                    url = {each.url}
                    title = {each.title}
                    summary = {each.summary}
                    medium_cover_image = {each.medium_cover_image}
                ></Movie>
            ): <h2>Loading...</h2>}
        
        </>

    )
};

export default Movies;
