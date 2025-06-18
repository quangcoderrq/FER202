const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

function EmployeeDropdown() {
  return (
    <div>
      <select>
        <option value="">Select an employee</option>
        {employees.map(employee => (
          <option key={employee.id || employee.name} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EmployeeDropdown;