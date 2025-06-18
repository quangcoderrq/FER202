function List(){
    const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];
return(
<div>
    <h1>list of Employee</h1>
    <ul>
        {employees.map(person=>(
            <li style={{color:"Blue"}} key={person.id || person.name}>
               ({person.id}?<p>id:{person.id}</p>:<p>no id</p>),
           Name:{person.name}, Age:{person.age}, Department:{person.department}</li>
        ))}
    </ul>
</div>
);
}
export default List;