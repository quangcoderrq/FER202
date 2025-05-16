import React from "react";
function Groupofoccupation(){
const people = [
  { Name: "quang", age: 12, occupation: "student" },
  { Name: "huy", age: 15, occupation: "student" },
  { Name: "truong", age: 30, occupation: "Teacher" },
  { Name: "lan", age: 25, occupation: "Engineer" },
  { Name: "minh", age: 40, occupation: "Teacher" }
];

const groupOccupation=people.reduce((acc,person)=>{
const {occupation}=person;
if(!acc[occupation]){
    acc[occupation]=[];
}
acc[occupation].push(person);
return acc;
},{});

return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.keys(groupOccupation).map((occupation, index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {groupOccupation[occupation].map((person, personIndex) => (
              <li key={personIndex}>
                Name: {person.Name}, Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Groupofoccupation;