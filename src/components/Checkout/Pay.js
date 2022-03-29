const Pay = ({total}) => {
    return ( 
        <div className="pay-container">
            <div className="pay-total">Total: ${total.toFixed(2)}</div>
            <button className="pay-btn">Pay</button>
        </div>
     );
}

export default Pay;