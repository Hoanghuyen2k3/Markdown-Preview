import React from 'react';
import { FaFreeCodeCamp, FaArrowsAlt, FaCompressAlt  } from "react-icons/fa";

function Editor(props){
    return(
        <div className={`editor ${props.full}`}>
            <div className="head">
                <div className="head-icon">
                    <FaFreeCodeCamp className="icon" />
                    <p>Editor</p>
                </div>
                <div className="arrow" onClick={(e)=>props.setClickEditor((c)=>!c)}>
                {
                    props.clickEditor ===true ? <FaArrowsAlt />:<FaCompressAlt />
                }   
                </div>


            </div>    
            <textarea id="editor" value={props.text} onChange={(e)=>props.setText(e.target.value)}></textarea>
        </div>
    )

}
export default Editor;