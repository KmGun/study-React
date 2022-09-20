import { 
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";
import Chart from "../components/Detail_Chart";
import Price from "../components/Detail_Price";


function Router(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/detail/:coinId" element={<Detail></Detail>}>
                        <Route path={`chart`} element={<Chart></Chart>}></Route>
                        <Route path={`price`} element={<Price></Price>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
    )

}

export default Router;