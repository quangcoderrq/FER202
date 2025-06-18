import { useState, useEffect } from "react";
import "./Tabs1.scss";
export const Tabs1 = () => {
    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("products");
    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
            .then(response => response.json())
            .then(data => {
                setData(data[tabActive])
            })
            .catch(error => { console.log(error) });
    }, [tabActive]);
    const handleChangeTab = (e) => {
        setTabActive(e);
        console.log(e);
    }
    return (
        <>
            <div className="tabs">
                <div className="tabs_item" onClick={(e) => handleChangeTab("products")}>
                    Products
                </div>
                <div className="tabs_item" onClick={(e) => handleChangeTab("users")}>
                    Users
                </div>
                <div className="tabs_item" onClick={(e) => handleChangeTab("posts")}>
                    Posts
                </div>
            </div>
            <div className="tab_content">
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.title || `{${item.firstName} ${item.lastName}}`}
                        </li>
                    ))}
                </ul>
            </div>
        </>);
}
