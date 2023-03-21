import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./component/List";
import Form from "./component/Form";

// import ListAuth from "./component/ListAuth"; // No funciona aún 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
