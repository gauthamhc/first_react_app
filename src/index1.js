// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// const heading = {
//   color: 'orange',
//   textAlign: 'center',
//   backgroundColor: 'yellow',
//   padding: '20px',
//   borderRadius: '20px'
// }

// const master = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   border: '2px solid #fff'
  
// }

// const cssStyle = {};

// let curTime = new Date();
// curTime = curTime.getHours();

// let greeting = '';

// if(curTime >=1 && curTime <12) {
//   greeting = 'Good Morning';
//   cssStyle.color = 'green'
// } else if (curTime >=12 && curTime <16) {
//   greeting = "Good Noon";
//   cssStyle.color = 'blue'
// } else if (curTime >=16 && curTime <19) {
//   greeting = "Good Evening";
//   cssStyle.color = 'pink'
// } else {
//   greeting = "Good Night";
//   cssStyle.color = 'black'
// }
 
// ReactDOM.render(
//   <>
//     <div style={master}>
//       <h1 style={heading}>Hello Sir,<span style={cssStyle}> {greeting} </span> </h1>
//     </div>
    
//   </>,
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root'));
