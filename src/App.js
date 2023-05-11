import './App.css';
import React, { useState, useEffect } from "react";
import Note from "./components/note/Note";
import PopUp from "./components/popUp/PopUp";
import axios from "axios"
import PopUpEdit from "./components/popUp/PopUpEdit";
import PopUpInformation from "./components/popUp/PopUpInformation";
import SkeletonNote from "./components/note/SkeletonNote";

function App() {
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false);
    const [editNote, setEditNote] = useState();
    const [alert, setAlert] = useState()
    const [delNote, setdelNote] = useState();
    const [hideAddPopUp, sethidePopUp] = useState(false);
    const [hideInformation, sethideInformation] = useState(false);
    const [hideEditPopUp, setEditPopUp] = useState(false);
    const [note, setnote] = useState([]);
    const [infoNote, setinfoNote] = useState([]);
    const [noteFilter, setnoteFilter] = useState('');
    function ClickOnAdd() {
        sethidePopUp(!hideAddPopUp);
    }

    function ClickOnInformation(id, text, title, date) {
        setinfoNote({id, text, title, date})
        sethideInformation(!hideInformation)
    }

     function ClickOnEdit(id, title, text, date) {
        setEditNote({id, title, text, date})
        setEditPopUp(true);
    }

    async function EditNote(id, title, text, date) {
      await  axios.put(`http://localhost:3001/notes/${id}`, {
            title,
            text,
            date
        }).then((data) => console.log(data))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/notes').then(res => setnote(res.data))
            .then(() => setLoad(false))
    }, [delNote, hideEditPopUp])

    async function CreateNote(title, text) {
        if (text && title) {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const today = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
            const result = await axios.post('http://localhost:3001/notes', {
                "id": Math.trunc(Math.random() * 283218831),
                "title": title,
                "text": text,
                "date": today
            })
            setnote(prevState => [...prevState, result.data])
        } else if (!text) {
           return 0;
        } else if (!title) {
          return 0;
        }
    }

    async function deleteNote(id) {
        const deleteNote = note.find(obj => obj.id === id)
        await axios.delete(`http://localhost:3001/notes/${deleteNote.id}`
        ).then((data) => {
            setnote(prevState => [...prevState, data])
            setdelNote(!delNote)
        }).catch(() => {
            setError(!error)
            console.log("error")
        })
    }

    return (
        <>
            <div className="menu">
                <div className="menu_inside">
                    <h2>Note</h2>
                    <div className='add_menu'>
                        <svg onClick={() => ClickOnAdd()} width="43" height="43" viewBox="0 0 43 43" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="43" height="43" rx="21.5" fill="black"/>
                            <path d="M14 21H28M21 14V28" stroke="white" strokeWidth="1.6" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <>
                    {hideAddPopUp && <PopUp
                        createNote={CreateNote}
                        alert={alert}
                        setAlert={setAlert}
                        hideAddPopUp={ClickOnAdd}
                    />}
                    {hideEditPopUp && <PopUpEdit
                        hideEditPopUp={() => setEditPopUp(!hideEditPopUp)}
                        note={editNote}
                        setNote={setEditNote}
                        editNote={EditNote}
                    />}
                    {hideInformation && <PopUpInformation
                        infonote={infoNote}
                        hideInformation={() => sethideInformation(!hideInformation)}
                    />}
                </>
                <div className="main">
                    <div className="search">
                        <input
                            onChange={(e) => setnoteFilter(e.target.value)}
                            value={noteFilter}
                            placeholder='search...'/>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 15L10.3333 10.3333M11.8889 6.44444C11.8889 7.52125 11.5696 8.57388 10.9713 9.46922C10.3731 10.3645 9.52279 11.0624 8.52794 11.4745C7.5331 11.8865 6.43841 11.9944 5.38229 11.7843C4.32617 11.5742 3.35606 11.0557 2.59464 10.2942C1.83322 9.53283 1.31469 8.56272 1.10462 7.5066C0.894541 6.45048 1.00236 5.35579 1.41444 4.36095C1.82651 3.3661 2.52434 2.5158 3.41967 1.91755C4.31501 1.31931 5.36764 1 6.44445 1C7.8884 1 9.27322 1.57361 10.2942 2.59464C11.3153 3.61567 11.8889 5.00049 11.8889 6.44444Z"
                                stroke="black" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="notes_main">
                        <h1>All Notes</h1>
                        <div className='notes'>
                            {load ? [...new Array(6)].map((_, index) => (<SkeletonNote key={index}/>)):
                                note.filter(value => {
                                    if(value.title && value.title.toLowerCase().includes(noteFilter.toLowerCase())) {
                                        return true;
                                    }else {
                                        return false;
                                    }
                                }).map(obj => (
                                    <Note
                                        key={obj.id}
                                        delete={deleteNote}
                                        openEdit={ClickOnEdit}
                                        openInformation={ClickOnInformation}
                                        {...obj}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        );
}

export default App;
