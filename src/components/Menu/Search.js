import React, { useContext, useState } from "react";
import { OrderContext } from "../context/global";

const Search = ({setFilter, currentFilter, setPrice, currentPrice, setName, setPage}) => {

    const tags = ['Food', 'Coffee', 'Pastry', 'Dessert'];
    const [searchQuery, setSearchQuery] = useState('');
    const [divFilterActive, setDivFilterActive] = useState(false);

    const order = useContext(OrderContext);
    return ( 
        <React.Fragment>
            <div className="search">
                <form className="form-search" onSubmit={(e) => { setName(searchQuery); e.preventDefault(); }}>
                    <label htmlFor="form-input" className="form-label">Search products</label>
                    <input id="form-input" className="form-input" type="text" placeholder="Search" onChange={(e) => {setSearchQuery(e.target.value)}}/>
                    <button className="form-btn"><i className="fas fa-search"></i></button>
                </form>
                <button onClick={() => { setDivFilterActive(!divFilterActive) }} className={`filter-btn ${divFilterActive ? 'active' : ''}`}><i className="fas fa-filter"></i></button>
                <button className="checkout-btn" onClick={() => {setPage('checkout')}}>
                        <i className="fas fa-shopping-bag"></i>
                        <div>{order.length}</div>
                </button>
            </div>
            <div className={`filter ${divFilterActive ? 'active' : ''}`}>
                <form>
                    <fieldset className="filter-container">
                        { tags.map( (tag, index) => 
                            <div className="filter-item" key={index}>
                                <label>{tag}</label>
                                <input type="checkbox" value={tag} onChange={(e) => { 

                                    e.target.checked ?
                                    setFilter( [...currentFilter, tag] ) :
                                    //add to new array if current tag is not equal to the valued tag
                                    setFilter( currentFilter.filter( (curTag) => curTag !== tag ))
                                    
                                    } }/>
                            </div>
                        ) }

                    </fieldset>
                    <fieldset className="price-range">
                        <label>Price range</label>
                        <input className="price-range-input" type="number" placeholder="Min" min="0" pattern="[0-9]+" onChange={ e => { setPrice({max: currentPrice.max, min: e.target.value}) } }/>
                        <span>-</span>
                        <input className="price-range-input" type="number" placeholder="Max" min="0" pattern="[0-9]+" onChange={ e => { setPrice({max: e.target.value, min: currentPrice.min}) } }/>

                    </fieldset>
                </form>
            </div>
        </React.Fragment>
     );
}

export default Search;