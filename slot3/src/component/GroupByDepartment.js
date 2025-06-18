

function GroupByDepartment() {
    const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
  const groupedEmployees = employees.reduce((acc, employee) => {
    const dept = employee.department;
    acc[dept] = acc[dept] || [];
    acc[dept].push(employee);
    return acc;
  }, {});

  return (
    <div>
      <h2>Employees by Department</h2>
      {Object.keys(groupedEmployees).sort().map(dept => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {groupedEmployees[dept].map(employee => (
              <li key={employee.id || employee.name}>{employee.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByDepartment;