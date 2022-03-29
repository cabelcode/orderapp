import React, { useContext, useState } from "react";
import { OrderContext } from "./context/global";
import Overlay from "./Overlay";

const Navbar = ({page, setPage}) => {
    
    const order = useContext(OrderContext);
    const [active, setActive] = useState(false); 

    return ( 
        <React.Fragment>
            <nav className={active ? 'active':''}>
                <div className="nav-wrapper">
                    <button onClick={() => {setActive(!active)}} className={`bars-btn`}><i className="fas fa-bars"></i></button>
                    <button className="checkout-btn" onClick={() => {setPage('checkout')}}>
                        <i className="fas fa-shopping-bag"></i>
                        <div>{order.length}</div>
                    </button>
                </div>
                <ul className="nav-container">
                        <li className="nav-item" onClick={() => {setPage('menu'); setActive(!active) }}>
                            <p>Menu</p>
                        </li>
                        <li className="nav-item" onClick={() => {setPage('checkout'); setActive(!active)}}>
                            <p>Checkout</p>
                        </li>
                </ul>
            </nav>
            <Overlay setActive={setActive} active={active} />
        </React.Fragment>
     );
}

export default Navbar;