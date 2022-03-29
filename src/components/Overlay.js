const Overlay = ({active, setActive}) => {
    return ( 
        <div className={`overlay ${active ? 'active' : ''}`} onClick={() => {setActive(!active)}}></div>
     );
}

export default Overlay;