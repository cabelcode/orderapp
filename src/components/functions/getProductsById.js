async function getProductsById(retriverFunc, ids) {
    let data;
    data = await Promise.all(
        ids.map( async id => {
            let response = await fetch(`/api/products?id=${id}`);

            if( !response.ok || !response.status === 200){
                return {result: {products:[]}};
            }else{
                return await response.json();
            }
            
        } )
    );
    if(data.length === 0 ){
        retriverFunc([]);
    }else{
        retriverFunc(data.map( item => item.result.products[0] ));
    }

}

export default getProductsById;