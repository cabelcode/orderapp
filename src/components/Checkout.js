import { useContext, useEffect, useState } from "react";
import Pay from "./Checkout/Pay";
import ProductOrder from "./Checkout/ProductOrder";
import { OrderContext } from "./context/global";
import getProductsById from "./functions/getProductsById";

const Checkout = ({page, setOrder}) => {
    
    const [orderData, setOrderData ] = useState([]);
    const [total, setTotal] = useState(0);
    const order = useContext(OrderContext);

    useEffect(() => {
        
        const retiveData = (data) => {
            let tempTotal = 0;
            data = data.map( item => {
                item.quantity = order.find( orderItem => orderItem.id === item.id).quantity;
                tempTotal +=  item.quantity * item.price;
                return item;
            } )
            setTotal(tempTotal);
            setOrderData(data);
        }

        getProductsById( retiveData, order.map( item => item.id ));

    }, [order])

    return ( 
        <section className={`checkout ${page === 'checkout' ? 'active' : ''}`}>
            <h2 className='section-name'>Checkout</h2>
            <ul className="product-order-container">

            {orderData.length > 0 ? 
                orderData.map((product, index) =>  
                    <li className="product-order-item" key={index}>
                        <ProductOrder data={product} setOrder={setOrder} />
                    </li>
                ) : <p className="No-Result">Start ordering from our Menu</p>
            }
            </ul>   
            <Pay total={total}/>
        </section>
     );
}

export default Checkout;