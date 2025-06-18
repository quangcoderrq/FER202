import { useState} from "react";
function Cart(){
    const unitPrice =120000;
    const [quanlity,setQuanlity]=useState(1);

    const handleChange=(e)=>{
        const updateQuanlity=parseInt(e.target.value);
        setQuanlity(updateQuanlity);
    };
    return(
        <>
        <table className="cart">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>số lượng</th>
                    <th>đon giá</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Giày thể thao</td>
                    <td>
                        <input type="number" value={quanlity} onChange={handleChange}></input>
                    </td>
                    <td>{unitPrice}VND</td>
                    <td>{unitPrice*quanlity}VND</td>
                </tr>
            </tbody>
        </table>
        </>
    
    );
}
export default Cart;