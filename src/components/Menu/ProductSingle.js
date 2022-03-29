import { useEffect, useState } from "react";
import Overlay from "../Overlay";

//product component has the setPage('productSingle)

const ProductSingle = ({data, page, setOrder, order, setPage}) => {

    const [quantity, setQuantity] = useState(1);
    const [orderExist, setOrderExist] = useState(false);
    const [active, setActive] = useState( false );

    useEffect(()=>{
        if(page==="productSingle"){
            setActive(true)
        }
    }, [page])

    useEffect(() => {
        if(!active && page === 'productSingle'){
            setPage('menu');
        }
    }, [active])
    
    useEffect(() => {
        if( order !== undefined && data !== undefined){
            setOrderExist(order.find( item => item.id === data.id ) || false);           
        }
    }, [order, data])

    useEffect(() => {
        if(orderExist){
            setQuantity(orderExist.quantity);
        }else{
            setQuantity(1);
        }
    }, [orderExist, page])

    const setOrderHandler = (dataObj) => {
        //if order exist create new array with updated order
        if(orderExist !== false){

            let data = order.map( item => {
                if( item.id === orderExist.id ){
                    return dataObj
                }else{
                    return item;
                }
            } )
            setOrder(data);

        }else{
            setOrder( [...order, dataObj] ) 
        }
        setPage('menu');
        
    }

    if(data === undefined)return false;

    return ( 
        <div className={`product-single ${active ? 'active' : ''}`}>
            <div className="product-single-wrapper">
                <button className="close-btn" onClick={ ()=>{ setActive(false) } }><i className="fas fa-times"></i></button>
                <img className="product-img" src={`./images/item${data.id}.svg`} />
                <div className="product-single-detail">
                
                    <span className="product-name">{data.name}</span>
                    <span className="product-price sm-text">{data.price}</span>
                </div>
                <div className="product-single-quantity">
                    <button className="minus-btn" onClick={() => { if(quantity > 1 ){ setQuantity(quantity - 1) } }}>-</button>
                    <span className="product-order-quantity">{quantity}</span>
                    <button className="plus-btn" onClick={ () => { setQuantity(quantity + 1) } }>+</button>
                </div>
                <button className={`order-btn ${orderExist ? "update" : "add"}`} onClick={() => { setOrderHandler({id: data.id, quantity: quantity}) }}>{orderExist !== false ? 'Update' : 'Add to'} Order</button>
            </div>
            <Overlay setActive={setActive} active={active} />
        </div>
    );
}

export default ProductSingle;