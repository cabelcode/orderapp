import { useContext } from "react";
import { OrderContext } from "../context/global";

const ProductOrder = ({data, setOrder}) => {
    const order = useContext(OrderContext);

    //TODO: This causes the useEffect the fetches data in Checkout to trigger.
    //Changing the quantity will make a fetch call.
    const handleSubtract = () => {
        return order.map(item => {
            if(item.id === data.id){
                item.quantity -= 1;
            }
            return item;
        })
    }

    const handleAdd = () => {
        return order.map(item => {
            if(item.id === data.id){
                item.quantity += 1;
            }
            return item;
        })
    }

    return ( 
        <div className="product-order">
            <img className="product-order-img" src={`./images/item${data.id}.svg`} alt=""/>
            <div className="wrapper">
                <span className="product-order-name">{data.name}</span>
                <span className="product-order-price sm-text">{data.price}</span>
                <div className="quantity-container">
                    <button className="minus-btn" onClick={() => { if( data.quantity > 1 ){setOrder( handleSubtract() )} }}>-</button>
                    <span className="product-order-quantity">{data.quantity}</span>
                    <button className="plus-btn" onClick={() => { setOrder( handleAdd() ) }}>+</button>
                </div>
            </div>
            <button className="trash-btn" onClick={()=> {setOrder( order.filter( item => item.id !== data.id ) )}}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ProductOrder;