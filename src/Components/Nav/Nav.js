import React, {useState, useEffect} from "react";

import {Link, useLocation} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "./Nav.css"

import {FaSearch} from "react-icons/fa"

import chrlogo from "../../Images/chrlogo.png";

import {GiHamburgerMenu} from "react-icons/gi";

const Nav = () =>{
    const [tabletDropdownClicked, setTabletDropdownClicked] = useState(false);

    const {pathname} = useLocation();

    useEffect(()=>{
        if(window.innerWidth > 500){
            window.onscroll = function() {addSticky()};
            let navbar = document.getElementById("bottomNav");
            let sticky = navbar.offsetTop;
        
            function addSticky(){
                if (window.pageYOffset > sticky) {
                    navbar.classList.add("BottomHidden");
                } else {
                    navbar.classList.remove("BottomHidden");
                }
            }   
        }
    },)

    useEffect(()=>{
        if(tabletDropdownClicked){
            dropdownMobile();
        }
    }, [pathname])

    const dropdownTablet = () =>{
        const nav = document.getElementById("NavTopRight");
        if(tabletDropdownClicked){
            nav.style.transform = "translateX(-100%)";
        }
        else{
            nav.style.transform = "translateX(0)";
        }
        setTabletDropdownClicked(!tabletDropdownClicked);
    }

    const dropdownMobile = () =>{
        const nav = document.getElementById("NavMobileDropdown");
        if(tabletDropdownClicked){
            nav.classList.add("translateY")
        }
        else{
            nav.classList.remove("translateY")
        }
        setTabletDropdownClicked(!tabletDropdownClicked);

    }

    const [searchQuery, SetsearchQuery] = useState("");
    const [disabled, setDisabled] = useState(false);
    let searchQueryTemp = "";

    const handleChange = (e) =>{
        SetsearchQuery(e.target.value);
    }

    const handleSubmit = () =>{
        // reject submission w/o budget selected
        let ddVal = document.getElementById("budget").options[document.getElementById("budget").selectedIndex].text;
        if(ddVal === "Max Price"){
            alert("Please select a maximum price to proceed!")
        }
        else{
            // get the search query and convert it to string+like+this for use in url
            searchQueryTemp = searchQuery.replaceAll(" ", "+");
            if(ddVal === "$1,000,000+"){
                ddVal = "999999999999"
            }
            else{
                ddVal = ddVal.replaceAll("$", "");
                ddVal = ddVal.replaceAll(",","");
            }
            window.open(`https://customhomerealty.com/properties/?combo_search=${searchQueryTemp}&max_list_price=${ddVal}&archive_view=grid`)
        }
    }

    return(
        <div className="NavWrapper">
            <div className="NavTop">
                <div className="NavTopLeft">
                    <Link to="/"><img src={chrlogo} alt="CHR" /></Link>

                    <div className="NavSearch">
                        <input type="text" name="location" id="loc" value={searchQuery} onChange={handleChange} placeholder="Search by area, neighborhood, MLS number"/>
                        <select name="budget" id="budget" onClick={()=>{setDisabled(true)}}> 
                            <option value="100000" disabled={disabled}>Max Price</option>
                            <option value="$100000">$100,000</option>
                            <option value="$250000">$250,000</option>
                            <option value="$500000">$500,000</option>
                            <option value="$750000">$750,000</option>
                            <option value="$1000000">$1,000,000</option>
                            <option value="no_budget">$1,000,000+</option>
                        </select>
                        <button onClick={handleSubmit}><FaSearch/></button>
                    </div>
                </div>
                <div className="NavTopRightDropdown">
                    <button onClick={()=>{dropdownTablet()}}><GiHamburgerMenu /></button>
                </div>
                <div className="NavTopRight" id="NavTopRight">
                    <Link to="/buy">Buy</Link>
                    <Link to="/sell">Sell</Link>
                    <HashLink to="/#contact">Contact</HashLink>
                </div>
            </div>
            <div className="NavBottom" id="bottomNav">
                <Link to="/communities/worcester">Worcester</Link>
                <Link to="/communities/shrewsbury">Shrewsbury</Link>
                <Link to="/communities/grafton">Grafton</Link>
                <Link to="/communities/millbury">Millbury</Link>
                <Link to="/communities/westborough">Westborough</Link>
            </div>

            <div className="MobileNav">
                {/* <div className="MobileNavWhite"></div> */}
                <div className="MobileNavLeft">
                    <Link to="/"><img src={chrlogo} alt="CHR" /></Link>
                </div>
                <div className="NavTopRightDropdown">
                    <button onClick={()=>{dropdownMobile()}}><GiHamburgerMenu /></button>
                </div>
                <div className="NavMobileDropdown translateY" id="NavMobileDropdown">
                    <div className="NavSearch">
                        <input type="text" name="location" id="loc" value={searchQuery} onChange={handleChange} placeholder="Search by area, neighborhood, MLS number"/>
                        <select name="budget" id="budget" onClick={()=>{setDisabled(true)}}> 
                            <option value="100000" disabled={disabled}>Max Price</option>
                            <option value="$100000">$100,000</option>
                            <option value="$250000">$250,000</option>
                            <option value="$500000">$500,000</option>
                            <option value="$750000">$750,000</option>
                            <option value="$1000000">$1,000,000</option>
                            <option value="no_budget">$1,000,000+</option>
                        </select>
                        <button onClick={handleSubmit}><FaSearch/></button>
                    </div>
                    <Link to="/buy">Buy</Link>
                    <hr />
                    <Link to="/sell">Sell</Link>
                    <hr />
                    <HashLink to="/#contact">Contact</HashLink>
                    <hr />
                    <Link to="/communities/worcester">Worcester</Link>
                    <hr />
                    <Link to="/communities/shrewsbury">Shrewsbury</Link>
                    <hr />
                    <Link to="/communities/grafton">Grafton</Link>
                    <hr />
                    <Link to="/communities/millbury">Millbury</Link>
                    <hr />
                    <Link to="/communities/westborough">Westborough</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;