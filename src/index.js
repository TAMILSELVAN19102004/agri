import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
// import Program from './Program/Program';
import App from './App';
import Content1 from './Content/Content1'
import Content2 from './Content/Content2'
import Contact from './Contact/Contact';
import Maintainance from './Maintainance/Maintainance';
import { Card } from '@mui/material';
import Card1 from './Card/Card1';
import Pay from './Pay/Pay';
import Login from './Login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    {/* <App/>  */}
    {/* <Getstart/> */}
    {/* <Content1/> */}
    {/* <Content2/> */}
{/* <Content3/> */}
 {/* <Content4/> */}
{/* <Content5/> */}
{/* <Content6/> */}
{/* <Content7/> */}
{/* <Content8/> */}
{/* <Contact/> */}
{/* <Maintainance/> */}
<App/> 


</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
