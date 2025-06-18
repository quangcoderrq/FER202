import { useState } from "react";

function Lamp() {
    const [state, setState] = useState(false);
const handleClick = () => {
    setState(!state);
  };
 console.log(state);
 return (
<>
<button onClick={handleClick}>
    {state ? "ON" : "OFF"}
</button>
<div>{state ? "đèn đang bật" : "đèn đang tắt"}</div>
</>
 );
}
export default Lamp;