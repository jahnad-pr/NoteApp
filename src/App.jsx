import React, { useEffect, useState, useRef } from 'react'
import Nav from './components/Nav'
import NoteContents from './components/NoteContents'
import Notelist from './components/Notelist'
import Settings from './components/Settings'

function App() {

  // the Usestates for manage
  const [notes, setNotes] = useState([]);
  const [isShown, setshown] = useState(true);
  const [cdata, setCData] = useState({});
  const [isCollected, setCollect] = useState(false);
  const [dataShow, setDS] = useState(false);
  const [sectionStyle, setSS] = useState({});
  const [inpDEsabled, setInpD] = useState(false);
  const [toEmpty, setEmty] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [again, setAgain] = useState(false);
  const [drk, setDrk] = useState(false);
  const [cKey, setkey] = useState(0);
  const [inSettings, setSing] = useState(false);
  const btn = useRef(null)

  // useEffect to manage local Host
  useEffect(() => {
    if (localStorage.getItem('drkMode')) {
      const isDrk = localStorage.getItem('drkMode')
      if (JSON.parse(isDrk)) {
        document.body.classList.add('lm')
        setDrk(true)
        btn.current.classList.add('active')
      }
    }
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever 'notes' state changes
  useEffect(() => { notes.length > 0 || isCollected ?(localStorage.setItem('notes',JSON.stringify(notes)), setCollect(true)) : null}, [notes]);
  
  
  // Document main
  const showClickedData = (title = '', note = '', time = '', w = 'Still') => (setCData({ title, note, time, w }))
  const addNote = (title, note, time,) => (setNotes([ { title, note, time, index: notes.length, w: false },...notes]), setDS(true))
  const edtNote = (id, title, note, time, w) => (setNotes(notes.map(notes => notes.index === id ? { title, note, time, index: notes.index, w } : notes)), setDS(true))
  const dltNote = (id) => (setNotes(notes.filter(notes => notes.index !== id)), setDS(true))

  // Document main
  return (
    <div className='rooter'>
      <section style={sectionStyle} id='section'>
        <Nav inSettings={inSettings} setSing={setSing} setshown={setshown} setSS={setSS} noteL={notes.length} />
        <Settings btn={btn} drk={drk} setDrk={setDrk} setshown={setshown} />
        <Notelist cKey={cKey} edtNote={edtNote} setAgain={setAgain} setKey={setkey} setEdit={setEdit} setEmpty={setEmty} inpSet={setInpD}
          setNt={setDS} addNote={addNote} showClickedData={showClickedData}
           setSS={setSS} listOfNotes={notes} isShown={isShown}
          setshown={setshown} />
        <NoteContents not={notes} setkey={setkey} isShown={isShown} setAgain={setAgain} again={again} dltNote={dltNote} cKey={cKey}
          edtNote={edtNote} isEdit={isEdit} setEmpty={toEmpty} toEmpty={setEmty} setSS={setSS}
          setshown={setshown} showNt={dataShow} setNt={setDS}
          addNote={addNote} inpSet={setInpD} inpD={inpDEsabled} data={cdata} />
      </section>
    </div>
  )
}

// export to main jsx
export default App;
