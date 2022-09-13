import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

function Detail(){
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [movieData,setMovieData] = useState([]);
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setMovieData(json.data)
        console.log(json.data)
        
    }
    useEffect(()=>{
        getMovie();
    },[])


    return(
        <>
            <h1>Detail Page</h1>
        </>
    );
};

export default Detail;