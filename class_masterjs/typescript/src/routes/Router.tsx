import { 
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";


function Router(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/detail/:coinId" element={<Detail></Detail>}></Route>
                </Routes>
            </BrowserRouter>
    )

}

export default Router;