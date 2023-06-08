import React from "react";
import {Link} from 'react-router-dom'

const HomeSocial = () =>{
    return(        
        <div className="HomeSocial">
            <div className="HomeSocialContent">
                <h4>Communities</h4>
                <hr />
                <div className="HomeSocialLinks">
                    <div className="HomeSocialLink">
                        <Link to="/communities/worcester">Worcester</Link>
                    </div>
                    <div className="HomeSocialLink">
                        <Link to="/communities/shrewsbury">Shrewsbury</Link>
                    </div>
                    <div className="HomeSocialLink">
                        <Link to="/communities/grafton">Grafton</Link>
                    </div>
                    <div className="HomeSocialLink">
                        <Link to="/communities/milbury">Milbury</Link>
                    </div>
                    <div className="HomeSocialLink">
                        <Link to="/communities/westborough">Westborough</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSocial;