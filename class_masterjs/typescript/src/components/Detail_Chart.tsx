import { useParams } from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";


interface IcoinHistory {
    time_open:  number;
    time_close: number;
    open:       number;
    high:       number;
    low:        number;
    close:      number;
    volume:     number;
    market_cap: number;
}


function Chart(){
    const {coinId} = useParams();
    const {isLoading ,data} = useQuery<IcoinHistory[]>([coinId,"Chart"],()=>fetchCoinHistory(coinId),{refetchInterval : 10000})
    return (
        <>
        <p>this is Chart</p>
        <ApexChart
            type="line"
            series={[{
                name : "close price",
                data : data ? data.map(each => each.close) : []
              }]}
            options={{
                theme: {
                  mode: "dark",
                },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                grid: { show: false },
                stroke: {
                  curve: "smooth",
                  width: 4,
                },
                yaxis: {
                  show: false,
                },
                xaxis: {
                    categories : data ? data.map(each => data.indexOf(each)) : []
                },
            }}
        
        ></ApexChart>
        </>
    )
}
export default Chart;
