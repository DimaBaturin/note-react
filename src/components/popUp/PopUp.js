import React from "react";

function PopUp(props) {
    const [title, setTitle] = React.useState('')
    const [text, setText] = React.useState('')
    const handleTextChangeText = (event) => {
        setText(event.target.value);
    };
    const handleTextChangeTitle= (event) => {
        setTitle(event.target.value);
    };
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            props.createNote(title,text)
            props.hideAddPopUp()
        }
    }
    return(
        <div className='popUp'>
            <div className='header_popUp'>
                <h1>Add Note</h1>
                <svg onClick={props.hideAddPopUp} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.949747 10.8493L10.8492 0.949758M0.949747 0.949758L10.8492 10.8493" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="input_popUp">
                <input value={title}  onChange={handleTextChangeTitle} onKeyDown={handleKeyDown} className='title' placeholder='title...'/>
                <textarea value={text} onChange={handleTextChangeText} onKeyDown={handleKeyDown} className='text' placeholder='text...'/>
            </div>
            <button onKeyDown={handleKeyDown} onClick={() =>{
                props.hideAddPopUp()
                props.createNote(title, text)}}>create</button>
        </div>
    )
}
export default PopUp;