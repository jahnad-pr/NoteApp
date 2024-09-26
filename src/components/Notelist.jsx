import NotList from './Lists/NotList'

// The mainLyout function its also exporting
export default function Notelist({ listOfNotes,setSS,showClickedData,isShown,setshown,setNt,inpSet,setEmpty,setEdit,setKey,setAgain,edtNote,cKey }) {

    // Plust Button and Hide and Show button Function
    const onPlus = () =>(isShown?(setSS({gridTemplateColumns:' var(--xl-show)'}),setshown(false),
    showClickedData()):null,inpSet(false),setEmpty(true),setEdit(false),setKey(null))
    const toggleEdit = () => (isShown?(setSS({gridTemplateColumns:' var(--xl-show)'}),
    setshown(false)):(setSS({gridTemplateColumns:' var(--xl-hide)'}),setshown(true)))
     
    return (    
        <div className="list">
            {/* the head */}
            <header>
                <i style={{transform:isShown?'rotate(0deg)':'rotate(180deg)'}} onClick={toggleEdit} className="fa-solid fa-caret-left"></i>
                <span></span>
                <h1 className='todo'>TODO</h1>
                <span></span>
                <i onClick={onPlus} className="fa-solid fa-square-plus"></i>
            </header>{
                // If the data exits
                listOfNotes.length>0?
                (<section>{
                    listOfNotes.map((data, index) => {
                        return <NotList cKey={cKey}  setshown={setshown} edtNote={edtNote} setAgain={setAgain}
                         setKey={setKey} setEdit={setEdit} setEmpty={setEmpty} setSS={setSS} inpSet={inpSet} 
                         setNt={setNt} key={index} showClickedData={showClickedData} 
                         data={{title:data.title, note:data.note, time:data.time,index:data.index,w:data.w}}/>})}
                {/* If the List Empt */}
                </section>):
                <div className='settings-div'>
                    <h1>No Needs!</h1>
                    <p>are you sure ,you are a humen</p>
                </div>
            }      
        </div>
    )
}
