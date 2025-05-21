function SortedEmployees() {
    const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    return deptCompare || a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Sorted Employees</h2>
      <ul>
        {sortedEmployees.map(employee => (
          <li key={employee.id || employee.name}>
            {employee.name} ({employee.department})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedEmployees;