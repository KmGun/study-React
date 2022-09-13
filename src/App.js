import Home from "./routes/Home"
import Hello from "./components/Hello";
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
          <Route path="/movie" element={<Hello></Hello>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
