import {useState} from 'react'
const Banner=()=>{
    const [ban,setBan]=useState(true)
    return(
        <div>
            <div className="banner">
                {ban?<img src="b3.jpg"/>:<img src="b2.jpeg"/>}
                </div>
         </div>
        )
    }
export default Banner