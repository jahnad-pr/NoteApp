
// Main fanction of Navigator
function Nav({noteL,setSS,setshown,inSettings,setSing}) {

    return (
        <div className="nav">
            <header>
                <div className="arrows one"></div>
                <div className="arrows two"></div>
            </header>
            <section className="nottop">
                <div className="head-over notrout">Routes</div>
                <div style={{background:inSettings?'transparent':'var(--navHover)'}} onClick={
                    ()=>(setSS({ gridTemplateColumns: ' var(--xl-hide)' }),setSing(false))} className="nav-list">
                <i className="fa-solid fa-folder-closed"></i>
                    <p>Notes</p><span></span>
                    <p className="count">{noteL?noteL:''}</p>
                </div>
                <div style={{background:!inSettings?'transparent':'var(--navHover)'}} onClick={
                    ()=>(setSS({ gridTemplateColumns: ' var(--xl-set)' }),setshown(true),setSing(true))} className="nav-list">
                <i className="fa-solid fa-gear inf"></i>
                    <p>Settings</p><span></span>
                </div>
            </section>
        </div>
    )
}

export default Nav

