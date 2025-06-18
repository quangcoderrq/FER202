import React, { useRef, useState } from "react";
function UseRef2() {
    const [inputValue, setinputValue] = useState("");
    const counterRef = useRef(0);
   const handleChange=(e)=>{
       setinputValue(e.target.value);
       counterRef.current=counterRef.current+1;
   }
   
 console.log(counterRef.current);
    return (
        <>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>counter: {counterRef.current}</p>
        </>
    );
}

export default UseRef2;