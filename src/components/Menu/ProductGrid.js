import Product from "./Product";
//Menu - setSingleId, setPage 
const ProductGrid = ({products, setPage, setSingleId}) => {
    if(products.length){
        return ( 
            <div className="product-list">
                <ul className="product-list-container">
                    { products.map( (product, index) => 
                    <li key={index} className="product-list-item">
                        <Product data={product} setPage={setPage} setSingleId={setSingleId}/>
                    </li>) }
                </ul>
            </div>
        );
    }else{
        return(
            <div className="product-list">
                <p className="No-Result">No result</p>
            </div>
        );
    }
    
     
}

export default ProductGrid;