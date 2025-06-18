const employee = { name: "John Doe", age: 30, department: "IT" };
function Employee(){
const{name,age,department}=employee
return(
<div>
    <h1>{name}</h1>
     <p>age:{age}</p>
        <p>department:{department}</p>
</div>
);    
}
export default Employee;