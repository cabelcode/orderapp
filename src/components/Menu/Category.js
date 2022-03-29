import { useEffect, useState } from "react";

const Category = ({setCategory, currentCategory}) => {
    const categoryList = ["Most Popular", "Main dish", "Snacks", "Drinks", 'all'];
    const [borderStyle, setBorderStyle]  = useState({});
    const btnActive = document.querySelector('.category-btn.active');
    const category = document.querySelector('.category');
    let btnProperties;
    let categoryProperties;
    
    useEffect(() => {

        if(btnActive !== null){
            btnProperties = btnActive.getBoundingClientRect();
            categoryProperties = category.getBoundingClientRect();
  
            setBorderStyle({
                width: btnProperties.width,
                left: btnProperties.x - categoryProperties.x
            })
        }
    }, [btnActive])

    return ( 
        <div className="category">
        
            {categoryList.map( (category, index) => {
                return <button 
                            className={`category-btn ${currentCategory === category ? 'active':''}`} 
                            onClick={()=>{setCategory(category)}} 
                            key={index}>
                                {category}
                        </button>
            } )}

            <div className="border-bottom" style={borderStyle}></div>
        </div>
     );
}

export default Category;