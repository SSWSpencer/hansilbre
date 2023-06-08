import React, {useState} from "react";
import "./Homepage.css";


import HomeTop from "./HomeTop.js";
import HomeSearch from "./HomeSearch.js";
import HomeMiddle from "./HomeMiddle.js";
import HomeSocial from "./HomeSocial.js";
import HomeProps from "./HomeProps.js";
import HomeForm from "./HomeForm.js";


import data from "./dummydata.json";

const Homepage = () =>{
    const [properties] = useState(data.properties);
    
    return(
        <div className="HomeWrapper">
            <HomeTop />
            <HomeSearch />
            <HomeMiddle />
            <HomeSocial />
            {(properties.length > 0) ? <HomeProps properties={properties}/> : null}
            <HomeForm />
            {/* <HomeFooter /> */}
        </div>
    )
}

export default Homepage;