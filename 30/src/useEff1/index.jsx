import { useEffect, useState } from "react";

function useEf1(){
    useEffect(() => {
        let item = document.querySelectorAll('ul li');
        console.log(item);
    });
    return(
        <>
        <ul>
            <li>m1</li>
            <li>m2</li>
            <li>m3</li>
        </ul>
        </>
    );
}
export default useEf1;