import React from "react";

import background_main from "../../Images/background_main.jpg";

const HomeTop = () => {
    return(
        <div className="HomeTop">
            <img src={background_main} alt="house" />
            <div className="HomeTopText">
                <div>
                    <h1>Hannah Silberman Realtor ®</h1>
                    <h5>Worcester County Expert</h5>
                </div>
            </div>
        </div>
    )
}


export default HomeTop;