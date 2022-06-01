import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
import Home from "./Component/Home/Home";
import './App.css';


function App() {
  return (
    <Router>

     <Routes>
       <Route path="/" element={<Home></Home>} />
       <Route path="/home" element={<Home></Home>} />
       
      

      
     </Routes>
     </Router>
   
  );
}

export default App;
