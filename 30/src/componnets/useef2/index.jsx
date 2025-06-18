import React, { useState } from "react";
import { useEffect } from "react";
import "./Products.scss"
function useEf2 ()  {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data =>  { 
            console.log(data);
            setData(data.products);
            setLoading(false);
        }).catch(error => console.error(error));  
    },[]);

    return(
<>
<div className="product_list">
{data.map((item) => (
 <div className="product_item" key={item.id}>
   <div className="product_image">
     <img src={item.images[0]} alt={item.title} />
   </div>
   <h3 className="product_title">
    {item.title}
   </h3>
   <p className="product_price">
    {item.price}$
   </p>
 </div>   
))}
</div>
</>
    );
}

export default useEf2;