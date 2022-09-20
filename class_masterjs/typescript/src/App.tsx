import Router from "./routes/Router";
import {ReactQueryDevtools} from "react-query/devtools";

function App(){
  return(
    <>
      <Router></Router>
      {/* <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools> */}
    </>
  )
}

export default App;
