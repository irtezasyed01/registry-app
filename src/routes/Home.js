import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>This is Home Page...</h1>
            <Link to="/about" className="link">Click here to go to About Us Page...</Link>
            <Link to="/registry" className="link">Click here to go to Registry Page...</Link>
        </div>
    );
}

export default Home;