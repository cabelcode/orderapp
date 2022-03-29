import React, { useState, useEffect, useContext } from 'react';
import getProducts from './functions/getProducts';
import Category from './Menu/Category';
import ProductGrid from './Menu//ProductGrid';
import Search from './Menu/Search';
import ProductSingle from './Menu//ProductSingle';
import { OrderContext } from './context/global';
//App - setOrder
const Menu = ({page, setPage, setOrder}) => {

    const [productList, setProductList] = useState([]);
    const [category, setCategory] = useState('Most Popular');
    const [filter, setFilter] = useState([]);
    const [price, setPrice] = useState({ max:"", min:"" });
    const [name, setName] = useState('');
    const [singleId, setSingleId] = useState(0);

    const order = useContext(OrderContext);

    useEffect( () => {
        let tags = [category, ...filter];
        getProducts(data => setProductList(data.products), tags, price, name);
    }, [category, filter, price, name])
    

    return (  
        <section className={`Menu ${page === 'menu' || page === 'productSingle' ? 'active' : ''}`}>
            <h2 className='section-name'>Menu</h2>
            <Search 
                setFilter={setFilter} 
                currentFilter={filter} 
                setPrice={setPrice}
                currentPrice={price} 
                setName={setName}
                setPage={setPage}
            />
            <Category 
                setCategory={setCategory} 
                currentCategory={category}
            />
            <ProductGrid 
                products={productList} 
                setPage={setPage} 
                setSingleId={setSingleId}
            />
            {console.log(page)}
            <ProductSingle 
                data={productList.find( product => product.id === singleId ? product : false ) } 
                page={page} 
                order={order} 
                setOrder={setOrder}
                setPage={setPage}
            />
        </section>
     );
}

export default Menu;