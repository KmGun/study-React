import Home from "./routes/Home"
import Detail from "./routes/Detail";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<Detail></Detail>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
