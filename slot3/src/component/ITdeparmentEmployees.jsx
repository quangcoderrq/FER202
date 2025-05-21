const  employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

function ITEmployees() {
  const itEmployees = employees.filter(employee => employee.department === "IT");

  return (
    <div>
      <h2>IT Department Employees</h2>
      <ul>
        {itEmployees.map(employee => (
          <li key={employee.id || employee.name}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ITEmployees;