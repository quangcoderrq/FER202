import React from "react";
import Firstteenagers from "./FirstTeenager";
function AreAllTeenager(){
        const people = 
[
  {Name:"quang",age: 12,occupation:"student"},
 {Name:"huy",age: 15,occupation:"Engineer"},
 {Name:"truong",age: 30,occupation:"Teacher"}
]

const areAllTeenager = people.every((person)=>
person.age>=13&&person<=19
);
const isTeenager = (age) => age >= 13 && age <= 19;
return(
<div>
      <h2>Are All Teenagers?</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Name: {person.name} ({person.age}) -{" "}
            {isTeenager(person.age) ? "Teenager" : "Not a teenager"}
          </li>
        ))}
      </ul>
      <p>
        {areAllTeenager
          ? "Yes, all are teenagers!"
          : "No, not all are teenagers."}
      </p>
    </div>
);
}
export default AreAllTeenager;