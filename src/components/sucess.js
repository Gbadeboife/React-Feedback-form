import React from "react";
import {Link} from "react-router-dom"

function Success(){
    return(
        <div className="success">
            <h2>SUCCESSFUL!</h2>
            <p>Congratulations, you have sucessfully signed up. Have a nice day!</p>
            <Link to='/' className="link">Go Back</Link> 

        </div>
    )
}

export default Success