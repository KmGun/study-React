import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie({id,url,title,summary,medium_cover_image}){
    return (
        <div>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
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



export default Movie;
