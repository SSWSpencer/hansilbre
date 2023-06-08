import React from "react";
import CHRfootericons from "../../Images/CHR-footer-icons.webp";

const HomeFooter = () =>{
    return(
        <div className="HomeFooter">
            <a href="https://maps.google.com/maps?z=12&t=m&q=loc:32+Hastings+Street%2C+Suite+201%2C+Mendon%2C+MA+01756"><h6>32 HASTINGS STREET SUITE 201, MENDON, MA 01756</h6></a>
            <a href="https://www.customhomerealty.com"><img src={CHRfootericons} alt="CHR Footer Icon" /></a>
            <a href="https://www.customhomerealty.com"><p>© 2021 Custom Home Realty. All Rights Reserved. | <a href="https://customhomerealty.com/privacy-policy" target="_blank" rel="noreferrer"><span className="footerPP">Privacy Policy</span></a></p></a>


            <a className="selfPlugFooter" href="http://sswebservices.com/" target="_blank" rel="noreferrer">Developed by Steven Spencer Web Services 2023</a>
        </div>
    )

}

export default HomeFooter;