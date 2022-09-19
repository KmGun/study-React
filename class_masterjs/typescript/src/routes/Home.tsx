import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

const Container = styled.div`

`;

const Header = styled.header`
    

`;

const Coin = styled.li`
    width:100px; height:30px;
    background-color: skyblue;
`;
const CoinsList = styled.ul`

`;

const Img = styled.img`
    
`


interface Icoins {
    id:        string;
    name:      string;
    symbol:    string;
    rank:      number;
    is_new:    boolean;
    is_active: boolean;
    type:      string;
}

function Home(){
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState<Icoins[]>([]);
    const loadCoins = async () => {
            const res = await axios.get(`https://api.coinpaprika.com/v1/coins`)
            setCoins(res.data.slice(0,100));
    }
    useEffect(function(){
        loadCoins()
        setLoading(false);
    },[])

    return(
            <Container>
                <Header>
                    Coins
                </Header>
                    {loading ? 
                    <p>loading....</p> : 
                    <CoinsList>
                        {coins.map(coin =>
                            <Coin key={coin.id}>
                                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></Img>
                                <Link
                                    to={`/detail/${coin.id}`}
                                    state={{...coin}}
                                >{coin.name}</Link>
                            </Coin>
                        )}
                    </CoinsList>
                    }
            </Container>

    )
}

export default Home;