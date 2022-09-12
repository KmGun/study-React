import { useEffect, useState } from "react";


function Movie({movies}){
    const movie_ = movies.map((each,index) => 
        <div key={index}>
            <h2>{each.title}</h2>
            <p>{each.summary}</p>   
        </div>
    )
    return (

            {movie_}

    )
}


function Movies(){
    const [loading,setLoading] = useState(true);
    const [movieDatas,setMovieDatas] = useState([]);
    const getMovies = async () =>{
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setLoading(false);
        setMovieDatas(json.data.movies)
        console.log(json.data)
    }

    useEffect(()=>{
        getMovies();
    },[])
    
    return(
        <>
            <h1>This is Movies</h1>
            {!loading ? movieDatas.map(each => 
                <Movie 
                    key = {}
                    
                ></Movie>
            ) : <h2>Loading...</h2>}
        
        </>

    )
};

export default Movies;
