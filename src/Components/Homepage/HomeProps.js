import React, {useState, useEffect} from "react";

import {FiArrowRightCircle, FiArrowLeftCircle, FiArrowRight} from "react-icons/fi";



const HomeProps = (properties) =>{
    const [props] = useState(properties.properties)

    useEffect(()=>{
        const slider = document.querySelector(".HomeProps");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    },[])

    return(
        <div className="HomePropWrapper">
            <div className="HomePropLeft">
                <img src="https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Our Properties" />
                <div className="HomePropLeftText">
                    <h5>My Listings <FiArrowRight /></h5>
                </div>
            </div>
            <div className="HomeProps">
                {props.map(item=>{
                    return(
                        <div className="Property">
                            <img src={item.thumbnail} alt={item.address} />
                            <div className="PropertyText">
                                <h6>{item.price}</h6>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="ScrollArrowRight">
                <FiArrowRightCircle />
            </div>
            <div className="ScrollArrowLeft">
                <FiArrowLeftCircle />
            </div>
        </div>
    )
}

export default HomeProps;