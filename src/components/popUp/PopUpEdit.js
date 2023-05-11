import React from "react";

function PopUpEdit(props) {
    const [title, setTitle] = React.useState(props.note.title)
    const [text, setText] = React.useState(props.note.text)
    const handleTextChangeText = (event) => {
        if(!event.target.value){
            setText(props.note.text)
        }else {
        setText(event.target.value);
            }
    };

    const handleTextChangeTitle= (event) => {
        if(!event.target.value){
            setTitle(props.note.title)
        }else {
            setTitle(event.target.value);
        }
    };
    function handleSubmit() {
        if(text || title) {
            props.editNote(props.note.id, title, text, props.note.date)
            props.hideEditPopUp(false)
        }else if(!text){
            console.log("впиши text")
        }else if(!title){
            console.log("впиши title")
        }
    }

    return(
        <div className='popUp'>
            <div className='header_popUp'>
                <h1>Edit Note</h1>
                <svg onClick={props.hideEditPopUp} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.949747 10.8493L10.8492 0.949758M0.949747 0.949758L10.8492 10.8493" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="input_popUp">
                <input defaultValue={props.note.title} onChange={handleTextChangeTitle} className='title' placeholder='title...'/>
                <textarea defaultValue={props.note.text} onChange={handleTextChangeText} className='text' placeholder='text...'/>
            </div>
            <button onClick={handleSubmit}>edit</button>
        </div>
    )
}
export default PopUpEdit;