import {useParams,useLocation} from "react-router-dom";
import { fetchCoinInfo } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import {Routes,Route,useMatch,Outlet,Link} from "react-router-dom";
import {Helmet} from "react-helmet";

interface IcoinData {
    id:                 string;
    name:               string;
    symbol:             string;
    rank:               number;
    is_new:             boolean;
    is_active:          boolean;
    type:               string;
    logo:               string;
    description:        string;
    message:            string;
    open_source:        boolean;
    development_status: string;
    hardware_wallet:    boolean;
    proof_type:         string;
    org_structure:      string;
    hash_algorithm:     string;
}

const Tabs = styled.div``;
const Tab = styled.span<{isActive : boolean}>``;

function Detail(){
    const {coinId} = useParams();
    const {state} = useLocation();
    const {isLoading : coinLoading , data : coinData} = useQuery<IcoinData>(["coin"],()=>fetchCoinInfo(coinId));
    const priceMatch = useMatch(`/:coinId/price`)
    const chartMatch = useMatch(`/:coinId/chart`)

    return(
        <>
            <Helmet>
                <title>{coinId}</title>
            </Helmet>
            <h1>{state?.name ? state.name : coinLoading ? <p>Loading....</p> : coinData?.name }</h1>
            <Tabs>
                <Tab isActive={chartMatch !== null}>
                    <Link to={`/detail/${coinId}/chart`}>Chart</Link>
                </Tab>
                <Tab isActive={priceMatch !== null}>
                    <Link to={`/detail/${coinId}/price`}>Price</Link>
                </Tab>
            </Tabs>
            <Outlet/>
        </>
    );
}

export default Detail;