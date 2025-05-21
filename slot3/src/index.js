import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employee from './component/Employee';
import ListEmployee from './component/ListEmployee';
import ListTableEmployee from './component/ListTableEmployee';
import AverageAge from './component/AverageAge';
import OptionEmployee from './component/OptionEmployee';
import ITdeparmentEmployees from './component/ITdeparmentEmployees';
import Sortemployee from './component/Sortemployee';
import GroupByDepartment from './component/GroupByDepartment';
import EmployeeSearch from './component/EmployeeSearch';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Employee/>
   <ListEmployee/>
   <ListTableEmployee/>
   <AverageAge/>
   <OptionEmployee/>
   <ITdeparmentEmployees/>
   <Sortemployee/>
   <GroupByDepartment/>
   <EmployeeSearch/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
