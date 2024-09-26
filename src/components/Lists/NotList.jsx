import React,{ useRef } from 'react'


// The mainLyout function its also exporting
export default function NotList({data,showClickedData,setNt,inpSet,setSS,setEmpty,setEdit,setKey,setAgain,edtNote,setshown,cKey }) {

    const main = useRef(null)

    // When the list clixcked
    const onListClicked = () => (showClickedData(data.title,data.note,data.time,data.w),setNt(true),inpSet(true),setSS({gridTemplateColumns:' var(--xl-show)'}),
    setEmpty(false),setEdit(true),setKey(data.index),setAgain(false),setshown(false))

    return (
        <>
        {/* List contents */}
        <div ref={main} style={{background:cKey===data.index?'var(--notHover)':'transparent'}} onClick={onListClicked} className="note-list">
            <p onClick={()=>{}} className="head">{data.title}</p>
        <input checked={(data.w?true:false)} onClick={(event)=>event.stopPropagation()} onChange={(()=> (edtNote(data.index, data.title, data.note, `${new Date().getHours()}:${new Date().getMinutes()}`,!data.w?true:false),
        setTimeout(() => {main.current.click()},0)
            ))} type="checkbox" name="" id="" ></input>
            <p className="time">{data.time}</p>
            <p className="content">{data.note}</p>
        </div>
        </>
    )
}