import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import { isDarkAtom } from "../atoms";
import { useRecoilState } from "recoil";

const Container = styled.div`
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
    background-color: ${props => props.theme.bgColor} ;
    color : ${props => props.theme.textColor}
`;

const Header = styled.header`
    height: 15vh;
    display:flex; 
    justify-content: center;
    align-items: center;

`;

const Coin = styled.li`
    width:100px; height:50px;
    background-color: skyblue;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const CoinsList = styled.ul`

`;

const Img = styled.img`
    width:35px; height: 35px;

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
    const [isDark,setIsDark] = useRecoilState(isDarkAtom);
    const toggleDarkMode = () => {
        setIsDark(prev=>!prev)
    }
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
                <button onClick={toggleDarkMode}>
                    {!isDark ? "TO DARK" : "TO LIGHT"}
                </button>
                    {loading ? 
                    <p>loading....</p> : 
                    <CoinsList>
                        {coins.map(coin =>
                            <Coin key={coin.id}>
                                <Link
                                    to={`/detail/${coin.id}`}
                                    state={coin}
                                >
                                     <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></Img>
                                    {coin.name} &rarr;
                                </Link>
                            </Coin>
                        )}
                    </CoinsList>
                    }
            </Container>

    )
}

export default Home;