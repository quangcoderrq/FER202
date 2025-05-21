function ListTable(){
    const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
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
          {employees.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
             <td>{person.department}</td> 
             <td>{person.age}</td>    
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
);
}

export default ListTable;