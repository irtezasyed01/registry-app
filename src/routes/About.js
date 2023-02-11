import React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        <><div>
            <h1>Welcome. This is about us page. You can get detailed information about us here...</h1>
        </div><Link to="/" className="link">Go to Home Page...</Link></>
    )
}

export default About;