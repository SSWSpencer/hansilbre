import React from "react";
import {useLocation} from "react-router-dom";
import commworcester from "../../Images/commworcester.png";
import commwestborough from "../../Images/commwestborough.png";
import commmillbury from "../../Images/commmillbury.png";
import commshrewsbury from "../../Images/commshrewsbury.png";
import commgrafton from "../../Images/commgrafton.png";


import Community from "./Community.js";

const Communities = () =>{
    const data = [
        {
            name: "Westborough",
            desc: "Surrounded by high-quality school systems and several shopping plazas, Westborough has a population of over 21,000 but still holds its historical value and small-town feeling. Westborough is filled with a sense of community through inviting neighborhoods and breath-taking scenery. With close proximity to shopping centers as well as local parks, Westborough is conveniently located to be far enough from the city but close enough to stores and restaurants.",
            schools: ["Hastings Elementary School", "Armstrong Elementary School", "Annie E Fales Elementary School", "Mill Pond School", "Sarah W Sibbons Middle School"],
            parks: ["Haskell Field", "Minuteman Park", "Veterans Freedom Park"],
            shopping: ["Westmeadow Plaza", "Westborough Shopping Center", "Target"],
            img: commwestborough
        },
        {
            name: "Shrewsbury",
            desc: "Shrewsbury is a large town that offers city-like qualities while still offering peaceful residential areas. Shrewsbury gives a feeling of family through seasonal community events. The Shrewsbury Public Library also provides a variety of reading and music classes for a variety of age groups",
            schools: ["St John's High School", "Beal Early Childhood Center", "Major Howard W Beal School", "Floral Street School", "Spring Street School", "Sherwood Middle School", "Oak Middle School", "Shrewsbury High School"],
            parks: ["Dean Park", "Prospect Park", "Lake Street Park", "Edgemere Park", "Greylock Park"],
            shopping: ["White City Shopping Center", "Shrewsbury Crossing", "Lakeway Commons"],
            img: commshrewsbury
        },
        {
            name: "Grafton",
            desc: "Established in 1735, Grafton is a historical town conveniently located near major highways and popular stores. With a population of just under 20,000, Grafton has several walking trails and lakes scattered throughout the town. Grafton offers the best of both worlds and is filled incredible scenic views like no other!",
            schools: ["Touchstone Community School", "Silver Spruce Montessori School", "Millbury Street Elementary School", "North Grafton Elementary School", "Grafton High School"],
            parks: ["Mill Villages Park", "Marsters Preserve Trail", "Norcross Park"],
            shopping: ["Stop and Shop Plaza"],
            img: commgrafton
        },
        {
            name: "Millbury",
            desc: "With the Shops at Blackstone Valley right off Route 146, Millbury provides endless entertaining and shopping for all! Millbury was established in 1716 and was originally named “North Parish of Sutton”. Millbury has several lakes and parks scattered around the town to provide access to outdoor activities, such as kayaking, fishing, swimming, and hiking.",
            schools: ["Assumption School", "Shaw Elementary School", "Henry Barnard School", "Millbury High School",],
            parks: ["Stowe Meadows", "Butler Farm Dog Park", "Veterans Memorial"],
            shopping: ["The Shops at Blackstone Valley"],
            img: commmillbury

        },
        {

            name: "Worcester",
            desc: "Worcester is a diverse city with a population of over 206,000. Worcester has several districts, including Grafton Hill, Sunderland, Lake Park, East Side, Downtown, Webster Square, West Side, Tatnuck,Kelly Square, and the Arts District. Each district of Worcester offers a variety of restaurants and cuisines, as well nightclubs and bars. Worcester is also home to the EcoTarium and the Worcester Art Museum - both must see’s! ",
            schools: ["Gates Lane Elementary School", "Saint Peter Central", "Notre Dame Academy", "Nativity School of Worcester", "Woodland Acamdemy", "Abby Kelley Foster Charter Public School", "Bancroft School"],
            parks: ["Blithewood Park", "Green Hill Park", "Hadwen Park", "Quinsigamond State Park", "Burncoat Park"],
            shopping: ["Lincoln Plaza", "Webster Square Plaza", "Perkins Farm Market Place", "Worcester Public Market"],
            img: commworcester
        }
    ]

    const location = useLocation().pathname;

    return(
        <>
        {data.map(item=>{
            if(location.includes(item.name.toLowerCase())){
                return(
                    <Community data={item} key={item.name}/>
                )
            }
            return null;
        })}
        </>
    )
}

export default Communities;