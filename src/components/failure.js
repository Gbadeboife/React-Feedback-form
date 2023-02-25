import React from "react";
import {Link} from "react-router-dom"

function Failure(){
    return(
        <div className="failure">
            <h2>FAILED!</h2>
            <p>Sorry, there was a problem while trying to sign up.</p>
            <Link to='/' className="link">Retry</Link>

        </div>
    )
}

export default Failure