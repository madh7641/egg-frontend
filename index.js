import React from "react";
import ReactDOM from "react-dom";
 const App = () => 
 {
    return <select>
        <option value="high-pass-filter">high-pass-filter</option>
        <option value="notch-filter"> notch-filter</option>
        <option selected value="cnormalization">normalization</option>
        <option value="low-pass-filter">low-pass-filter</option>
    </select>
 
 };
 ReactDOM.render(<App/>,document.querySelector("#root"));