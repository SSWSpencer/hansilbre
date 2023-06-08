import React from "react";

import background_main from "../../Images/background_main.jpg";

import {useLocation} from "react-router-dom";

import BuyForm from "./BuyForm.js";
import SellForm from "./SellForm.js";

import Communities from "./Communities";

import "./RoutedPage.css"

const RoutedPage = () => {

    const location = useLocation().pathname;

    return(
        <div className="BuyTop">
            <img className="RPImage" src={background_main} alt="house" />
            <div className="RoutedPageWrapper">
                <div className="RoutedPageContent">
                    {location.includes("/buy") ? <BuyForm/> : null}
                    {location.includes("/sell") ? <SellForm /> : null}
                    {location.includes("/communities") ? <Communities /> : null}
                </div>
            </div>
        </div>
    )
}


export default RoutedPage;