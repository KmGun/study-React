import {useParams,useLocation} from "react-router-dom";


function Detail(){
    const {coinId} = useParams();
    const coinData = useLocation().state;

    return(
        <>
            <h1>{coinData.name}</h1>
            <p></p>
        </>
    );
}

export default Detail;