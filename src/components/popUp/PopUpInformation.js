import React from "react";

function PopUpEditInformation(props) {
    console.log(props.infonote.date)
    return(
        <div className='popUp'>
            <div className='header_popUp'>
                <h1>Information</h1>
                <svg onClick={props.hideInformation} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.949747 10.8493L10.8492 0.949758M0.949747 0.949758L10.8492 10.8493" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="input_popUp">
                <input defaultValue={props.infonote.title} style={{pointerEvents: "none"}} className='title' placeholder='title...'/>
                <textarea readOnly={true} defaultValue={props.infonote.text} style={{pointerEvents: "none"}} className='text' placeholder='text...'/>
            </div>
            <div className="info-block">
                <p>{props.infonote.date}</p>
                <p>by Baturin Dmytro</p>
            </div>
        </div>
    )
}
export default PopUpEditInformation;