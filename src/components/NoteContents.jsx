import React, { useRef,useState } from 'react';

// The mainLyout function its also exporting
export default function NoteContents({ data, inpD, inpSet, addNote, showNt, setNt, setSS, setshown, 
    setEmpty, isEdit, edtNote, cKey, dltNote,again,setAgain,isShown,setkey,not }) {

    // some variable to manage this page only
    let elementRefT = useRef(null)
    let elementRefN = useRef(null)
    let savBtn = useRef(null)
    let status = useRef(null)
    const [comp, setComp] = useState(false);
    
    // Show and hide some elements
    showNt&&isEdit ? (elementRefT.current.value = data.title, elementRefN.current.value = data.note) : null
    if(setEmpty&&!isEdit&&!again){elementRefT.current.value = '', elementRefN.current.value = ''}
    isEdit ? savBtn.current.style.opacity = '.3' : null

    // Delete the note
    const onDelete = () => {
        isEdit?(dltNote(cKey),elementRefT.current.value = '', elementRefN.current.value = '', setNt(false),
        setkey(null),setSS({ gridTemplateColumns: ' var(--xl-hide)' }), setshown(true)) : null
    }

    // TO show or hide editor // Edit button // OnInput Changed //
    const toggleEdit = () => isShown?(setSS({gridTemplateColumns:' var(--xl-show)'}),setshown(false)):(setSS({gridTemplateColumns:' var(--xl-hide)'}),setshown(true))
    const onIconClick = () => { (inpD ? (inpSet(false)) : inpSet(true),isEdit?setAgain(false):setAgain(true)) }
    const onEdit = () => { (isEdit ? ((savBtn.current.style.opacity = '1'),setAgain(false)) : null) }
    const onSave = () => {
        
        // Check wether the same data or not
        if (isEdit && elementRefT.current.value === data.title && elementRefN.current.value === data.note) {
            savBtn.current.style.opacity = '.3'
            return alert('No changes')
        }

        // Edit the note
        if (isEdit) {
            let d = new Date();
            elementRefT.current.value.length && elementRefN.current.value.trim().length ?
                (edtNote(cKey, elementRefT.current.value, elementRefN.current.value, `${d.getHours()}:${d.getMinutes()}`,data.w)
                    , elementRefT.current.value='',elementRefN.current.value ='', setNt(false),
                    setSS({ gridTemplateColumns:'var(--xl-hide)' }), setshown(true),setAgain(false),setkey(null)) :
                    alert('all field required')
        }
        // savingData new Note
        else {
            let d = new Date();
            elementRefT.current.value.trim().length && elementRefN.current.value.trim().length&&not.length<4 ?
                (addNote(elementRefT.current.value, elementRefN.current.value, `${d.getHours()}:${d.getMinutes()}`)
                    , elementRefT.current.value = '', elementRefN.current.value = '', setNt(false),
                    setSS({ gridTemplateColumns: ' var(--xl-hide)' }), setshown(true),setAgain(false),setkey(null)) :
                    alert('all field required')   
        }
    }

    return (
        // the edit layout
        <div className="note-contents">
            <header>
                {/* Heder icons */}
                <i style={{display:'var(--xl-vanish)'}} onClick={toggleEdit} className="fa-solid fa-caret-right"></i>
                <i style={{color: inpD?'var(--text)':'gray'}} onClick={onIconClick} className="fa-solid fa-pen"></i><span></span>
                <i style={{opacity: isEdit?'1':'.3'}} onClick={onDelete} className="fa-solid fa-trash"></i>
                <i style={{opacity: isEdit?'.3':'1'}} ref={savBtn} onClick={onSave} className="fa-solid fa-floppy-disk"></i>
            </header>
            <section className='className="nottopp"'>
                {/* input feald */}
                <div ref={status} style={{opacity:.5}}  className="date-editor">{data.w?
                `${data.time},${isEdit?'Comleted':''}`:
                `${data.time},${isEdit?'Not Comleted':''}`}</div>
                <form method='dialog' action="#">
                <input maxLength="45" onInput={onEdit} ref={elementRefT} disabled={inpD} placeholder="Title here" className="inputs title" type="text" required></input>
                <textarea onInput={onEdit} ref={elementRefN} disabled={inpD} placeholder="Write somthing" className="inputs dec" type="text" name="note"  required></textarea>
                <button style={{display:'none'}} type='submit'></button>
                </form>
            </section>
        </div>
    )
}
