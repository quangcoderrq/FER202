function SortByOccupationAndAge(){
        const people = 
[
  {Name:"quang",age:12,occupation:"student"},
 {Name:"huy",age:15,occupation:"Engineer"},
 {Name:"truong",age:30,occupation:"Teacher"}
];

const sortedPeople = [...people].sort((a, b) => {
    
   if (a.occupation.toLowerCase() < b.occupation.toLowerCase()) return -1;
if (a.occupation.toLowerCase() > b.occupation.toLowerCase()) return 1;
    
    return a.age - b.age;
  });

return (
    <div>
      <h2>Sorted by Occupation and Age</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            Name: {person.Name}, Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );

}


export default SortByOccupationAndAge;