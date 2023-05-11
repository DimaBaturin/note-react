import React from "react";

function Note(props) {
    const[hideoption, setHideOption] = React.useState(false)

    const editorRef = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (editorRef.current && !editorRef.current.contains(event.target)) {
                setHideOption(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [editorRef]);

    function OnClickMenu() {
        setHideOption(!hideoption);
    }


    return(
       <>
           <div className='note'>
               {hideoption && <div ref={editorRef} className="note_editor">
                   <div className='note_editor_elements'>
                       <div onClick={() => props.delete(props.id)} className='row delete'>
                       <svg width="12" height="12" viewBox="0 0 12 12"  fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.235 4.64499L7.355 6.76499L3.62 10.5H1.5V8.37999L5.235 4.64499ZM10.205 3.20499L8.795 1.79499C8.74852 1.74813 8.69322 1.71093 8.63229 1.68555C8.57136 1.66016 8.50601 1.64709 8.44 1.64709C8.37399 1.64709 8.30864 1.66016 8.24771 1.68555C8.18678 1.71093 8.13148 1.74813 8.085 1.79499L6.645 3.23499L8.765 5.35499L10.205 3.91499C10.2519 3.86851 10.2891 3.81321 10.3144 3.75228C10.3398 3.69135 10.3529 3.626 10.3529 3.55999C10.3529 3.49399 10.3398 3.42864 10.3144 3.36771C10.2891 3.30678 10.2519 3.25148 10.205 3.20499Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                           <h4>delete</h4>
                       </div>
                       <div onClick={() => props.openEdit(props.id, props.title, props.text, props.date)} className='row edit'>
                       <svg width="14" height="14" viewBox="0 0 14 14"   fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 3.66667H13M10 3.66667V1.66667C10 1.48986 9.92098 1.32029 9.78033 1.19526C9.63968 1.07024 9.44891 1 9.25 1H4.75C4.55109 1 4.36032 1.07024 4.21967 1.19526C4.07902 1.32029 4 1.48986 4 1.66667V3.66667M5.5 6.33333V10.3333M8.5 6.33333V10.3333M11.5 12.3333V3.66667H2.5V12.3333C2.5 12.5101 2.57902 12.6797 2.71967 12.8047C2.86032 12.9298 3.05109 13 3.25 13H10.75C10.9489 13 11.1397 12.9298 11.2803 12.8047C11.421 12.6797 11.5 12.5101 11.5 12.3333Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                           <h4>edit</h4>
                       </div>
                       <div onClick={() => props.openInformation(props.id, props.title, props.text, props.date)} className='row information'>
                           <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M5.52501 3.5H5.47501" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M5.5 6V7.5M1 5.5C1 4.30653 1.47411 3.16193 2.31802 2.31802C3.16193 1.47411 4.30653 1 5.5 1C6.69347 1 7.83807 1.47411 8.68198 2.31802C9.52589 3.16193 10 4.30653 10 5.5C10 6.69347 9.52589 7.83807 8.68198 8.68198C7.83807 9.52589 6.69347 10 5.5 10C4.30653 10 3.16193 9.52589 2.31802 8.68198C1.47411 7.83807 1 6.69347 1 5.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           <h4>information</h4>
                       </div>
                   </div>
               </div>}
               <div className="note_inside">
                   <svg  onClick={() => OnClickMenu()} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g filter="url(#filter0_d_3_54)">
                           <path d="M5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z" />
                           <path d="M10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z"/>
                           <path d="M17 5.5C17 5.89782 16.842 6.27936 16.5607 6.56066C16.2794 6.84196 15.8978 7 15.5 7C15.1022 7 14.7206 6.84196 14.4393 6.56066C14.158 6.27936 14 5.89782 14 5.5C14 5.10218 14.158 4.72064 14.4393 4.43934C14.7206 4.15804 15.1022 4 15.5 4C15.8978 4 16.2794 4.15804 16.5607 4.43934C16.842 4.72064 17 5.10218 17 5.5Z" />
                       </g>
                       <defs>
                           <filter id="filter0_d_3_54" x="0" y="0" width="21" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset/>
                               <feGaussianBlur stdDeviation="2"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_54"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_54" result="shape"/>
                           </filter>
                       </defs>
                   </svg>
                   <h1>{props.title}</h1>
                   <div className='p'>
                   <p>{props.text}</p>
                   </div>
               </div>

           </div>
       </>
   )
}
export default Note;