import React from "react";

import {Link} from 'react-router-dom';

const HomeSearch = () =>{

    return(
        <div className="HomeDivider">
            <div className="HomeDividerContent">
                <h4>Let's get started</h4>
                <p>Looking for a new house, condo, or rental property? Let my experience guide you to your new property in the Central Massachusetts area.</p>
                <p>Looking to move out of the area? Let me do the heavy lifting. You'll be my top priority from the day we list your house to the moment it closes</p>
                <Link className="BuySellButton" to="/buy">Buy</Link>
                <Link className="BuySellButton" to="/sell">Sell</Link>
            </div>
        </div>
    )
}

export default HomeSearch;