import React, { useState } from "react";
import { useEffect } from "react";
import "../useef2/Products.scss";
function UseEf3() {
    const limit = 10;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageActive, setPageActive] = useState(0);
    const [quanlitypage, setPagequantity] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.products);
                setPagequantity(Math.ceil(data.total / limit));
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [pageActive]);
    const hanleClick = (e) => {
        setPageActive(e);
        console.log(e);
    }
    const handleNextPage = () => {
        setPageActive(pageActive + 1);
    }
    console.log(data);
    console.log(quanlitypage);

    return (
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
             <li className="pagination_item" onClick={handleNextPage}>
                    Next
                </li>
            <ul className="pagination">
                {[...Array(quanlitypage)].map((_, index) => (
                    <li className="pagination_item" key={index} onClick={() => hanleClick(index)}>
                       {index + 1}
                    </li>
                    
                ))}
                <li className="pagination_item" onClick={handleNextPage}>
                    Next
                </li>
            </ul>
        </>
    );
}

export default UseEf3;