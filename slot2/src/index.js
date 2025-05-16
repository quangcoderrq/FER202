import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from "./component/NamePerson";
import PeopleList from './component/PeopleList';
import Firstteenager from './component/FirstTeenager';
import AreAllTeenager from './component/AreAllTeenagers';
import SortByOccupationAndAge from './component/SortByOccupationAndAge';
import AverageAgeByOccupation from './component/AverageAgeByOccupation';
import OldestAndYoungest from './component/OldestAndYoungest';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PeopleList/>
     <Firstteenager/>
     <AreAllTeenager/>
    <SortByOccupationAndAge/>
    <OldestAndYoungest/>
      <AverageAgeByOccupation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
