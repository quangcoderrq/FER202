import React from "react";

function OldestAndYoungest() {
  const people = [
    { Name: "quang", age: 12, occupation: "student" },
    { Name: "huy", age: 15, occupation: "student" },
    { Name: "truong", age: 30, occupation: "Teacher" },
  ];

  // Find the oldest person
  const oldest = people.reduce((max, person) => 
    person.age > max.age ? person : max, people[0]);

  // Find the youngest person
  const youngest = people.reduce((min, person) => 
    person.age < min.age ? person : min, people[0]);

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      <p>
        Oldest: {oldest.Name}, Age: {oldest.age}, Occupation: {oldest.occupation}
      </p>
      <p>
        Youngest: {youngest.Name}, Age: {youngest.age}, Occupation: {youngest.occupation}
      </p>
    </div>
  );
}

export default OldestAndYoungest;