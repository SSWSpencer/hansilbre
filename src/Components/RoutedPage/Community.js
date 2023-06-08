import React from "react";


const Community = props => {

    return(
        <div className="CommunityWrapper">
            <div className="CommunityLeft">
                <img src={props.data.img} alt={props.data.name}/>
            </div>
            <div className="CommunityRight">
                <div className="CommunityTop">
                    <h4>{props.data.name}</h4>
                    <p>{props.data.desc}</p>
                </div>
                <div className="CommunityBottom">
                    <div className="CBList">
                        <h6>Schools</h6>
                        <ul>
                            {props.data.schools.map(item=>{return(<li className="CBListEntry">{item}</li>)})}
                        </ul>
                    </div>
                    <div className="CBList">
                        <h6>Parks</h6>
                        <ul>
                            {props.data.parks.map(item=>{return(<li className="CBListEntry">{item}</li>)})}
                        </ul>
                    </div>
                    <div className="CBList">
                        <h6>Shopping</h6>
                        <ul>
                            {props.data.parks.map(item=>{return(<li className="CBListEntry">{item}</li>)})}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Community