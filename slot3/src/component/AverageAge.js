const avergeAge=(...ages)=>{
    if(ages.length==0) return 0;
    const sum=ages.reduce((acc,age)=>acc+age,0);
    return sum/ages.length;
}
function AverageEmployee(){
        const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const ages = employees.map(employee => employee.age);
const avg = avergeAge(...ages);

return (
    <div>
      <p>Average Age: {avg.toFixed(2)}</p>
    </div>
  );
}

export default AverageEmployee;
