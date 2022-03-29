const Product = ({data, setPage, setSingleId}) => {
    return ( 
        <div className="product" onClick={ ()=> { setPage('productSingle'); setSingleId(data.id)}}>
            <img className="product-img" src={`./images/item${data.id}.svg`} />
            <span className="product-name">{data.name}</span>
            <span className="product-price sm-text">{data.price}</span>
        </div>
     );
}

export default Product;