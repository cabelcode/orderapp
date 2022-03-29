async function getProducts(retriverFunc, tags, price, name) {

    let tagsQuery = [];
    tags.forEach( (tag) => { 
        if(tag === 'all') return;
        tagsQuery = [ ...tagsQuery,`tags=${tag.toLowerCase()}`]; 
    })

    //appending all the filters
    let query = '';
    let queryArray = [...tagsQuery];
    
    if(price.max) queryArray = [...queryArray, `max_price=${price.max}`];
    if(price.min) queryArray = [...queryArray, `min_price=${price.min}`];
    if(name) queryArray = [...queryArray, `name=${name}`]

    queryArray.forEach((param, index) => {
        query += index === 0 ? param : `&${param}`;
    })
    let response = await fetch(`http://localhost:3030/api/products?${query}`);
    let data;
    if( !response.ok || !response.status === 200){
        data = {result: {products:[]}};
    }else{
        data = await response.json()
    }
    retriverFunc( data.result );
    
}

export default getProducts;