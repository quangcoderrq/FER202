import React from "react";



function PeopleList (){ 
    const People = 
[
  {Name:"quang",age:"12",occupation:"student"},
 {Name:"huy",age:"23",occupation:"Engineer"},
 {Name:"truong",age:"30",occupation:"Teacher"}
]
    return(

   <div>
      <h2>People Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {People.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
    }
 
  export default PeopleList;
  
