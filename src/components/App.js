import { Outlet, Link } from "react-router-dom";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
     <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Item1">Item1</Link>
          </li>
          <li>
            <Link to="/Item2">Item2</Link>
          </li>
          <li>
            <Link to="/Item3">Item3</Link>
          </li>
        </ul>
     <Outlet/>
    </div>
  )
}

export default App
