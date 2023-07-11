import React  from 'react';
import { FaFreeCodeCamp, FaArrowsAlt, FaCompressAlt  } from "react-icons/fa";
import {marked} from "marked";

function Previewer(props){
    const createMarkUp = (val) => {
        return { __html: marked(val) }
       }
    
    return(
        <div className={`preview ${props.full}`}>
            <div className="head">
                <div className="head-icon">
                    <FaFreeCodeCamp className="icon" />
                    <p>Previewer</p>

                </div>
                <div className="arrow" onClick={(e)=>props.setClickPreview((c)=>!c)}>
                {
                    props.clickPreview ===true ? <FaArrowsAlt />:<FaCompressAlt />
                }   
            </div>
            </div>  
            <div className="pre" dangerouslySetInnerHTML={createMarkUp(props.text)}></div>
        </div>
    )
}
export default Previewer;