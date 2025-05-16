import React from "react";
function Firstteenagers(){
        const people = 
[
  {Name:"quang",age:12,occupation:"student"},
 {Name:"huy",age:15,occupation:"Engineer"},
 {Name:"truong",age:30,occupation:"Teacher"}
]
const firstteenager = people.find(
    (person) => person.age >= 13 && person.age <= 19
  );
    return(
    <div>
        <h2>Firstteenagers</h2>
    {firstteenager?(
        <ul>
            Name: {firstteenager.Name}, Age: {firstteenager.age}, Occupation: {firstteenager.occupation}
        </ul>
    ):(
        <p>No teenage found</p>
    )
    }
    </div>
    );
}

export default Firstteenagers;