import React from "react";

function AverageAgeByOccupation() {
  const people = [
    { Name: "quang", age: 12, occupation: "student" },
    { Name: "huy", age: 15, occupation: "student" },
    { Name: "truong", age: 30, occupation: "Teacher" },
  ];


  const groupedByOccupation = people.reduce((acc, person) => {
    const { occupation, age } = person;
    if (!acc[occupation]) {
      acc[occupation] = { totalAge: 0, count: 0 };
    }
    acc[occupation].totalAge += age;
    acc[occupation].count += 1;
    return acc;
  }, {});


  const averageAges = Object.keys(groupedByOccupation).reduce((acc, occupation) => {
    const { totalAge, count } = groupedByOccupation[occupation];
    acc[occupation] = totalAge / count;
    return acc;
  }, {});

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.keys(averageAges).map((occupation, index) => (
          <li key={index}>
            {occupation}: {averageAges[occupation].toFixed(1)} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;