import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Item1 from "./components/item1.jsx";
import Item2 from "./components/Item2.jsx";
import Item3 from "./components/Item3.jsx";



    <Router>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="item2" element={<Item1/>}/>
    <Route path="item3" element={<Item2/>}/>
    <Route path="item1" element={<Item3/>}/>
    </Routes>
</Router>


ReactDOM.render(<App />, document.getElementById("root"));
