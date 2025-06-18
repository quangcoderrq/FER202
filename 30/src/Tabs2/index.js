import { useState, useEffect } from "react";
import "./Tabs2.scss";
export const Tabs2 = () => {
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
                <div className="tabs_item" onClick={(e) => handleChangeTab("comments")}>
                    comments
                </div>
                <div className="tabs_item" onClick={(e) => handleChangeTab("todos")}>
                    Todos
                </div>
                <div className="tabs_item" onClick={(e) => handleChangeTab("quotes")}>
                    quotes
                </div>
            </div>
            <div className="tab_content">
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.body || item.todo || item.quote}
                        </li>
                    ))}
                </ul>
            </div>
        </>);
}
