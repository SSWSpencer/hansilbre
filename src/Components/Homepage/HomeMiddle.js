import React from "react";

import agentpic from "../../Images/agentpic.jpg"

import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";

const HomeMiddle = () =>{
    return(
        <div className="HomeMiddle">
            
            <div className="HomeMiddleTop">
                
                <div className="HomeMiddleTopLeft">
                    <img src={agentpic} alt="agent" />
                </div>
                
                <div className="HomeMiddleTopRight">
                    <h5>Get to know your Realtor</h5>
                    <p>As a lifelong resident of the Worcester County area, Hannah’s extensive knowledge on the neighboring cities and towns gives her the ability to provide her clients with valuable insight on the qualities that each town has to offer. Her expertise on the various communities allows her to guide her clients to the right location that best suits their needs. Hannah’s passion for helping others is recognized by her clients through her affability and professionalism. Hannah’s ever-growing passion for real estate began at a very young age and she even studied several maps of various towns during recess in elementary school (her mother can confirm this statement)! An undergraduate from Worcester State University, Hannah has an educational background in psychology, spanish, and visual art. She understands that buying and selling real estate can be a stressful process and therefore takes the time to guide her clients through every step of the way. Hannah values relationships over transactions and is happy to be a resource for her clients.</p>
                    <div className="HomeMiddleSocial">
                        <div className="HomeMiddleSocialLink">
                            <a href="https://www.facebook.com/profile.php?id=100015999631510" target="_blank" rel="noreferrer"><BsFacebook/></a>
                        </div>
                        <div className="HomeMiddleSocialLink">
                            <a href="https://www.instagram.com/hannahsilbrealestate/" target="_blank" rel="noreferrer"><BsInstagram/></a>
                        </div>
                        <div className="HomeMiddleSocialLink">
                            <a href="https://www.linkedin.com/in/hannah-silberman-5ab528239/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default HomeMiddle;