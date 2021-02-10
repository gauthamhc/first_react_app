import React from 'react';


function App() {
  const heading = {
    color: '#2F4858',
    textAlign: 'center',
    backgroundColor: '#9A67A5',
    padding: '20px',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  }

  const master = {
    border: '2px solid #fff',
    padding: '20px',
    borderRadius: '40px',
    backgroundColor: '#D169A3',
  }

  const inside = {
    color: '#40577A'
  }

  const cssStyle = {};

  let curTime = new Date();
  curTime = curTime.getHours();

  let greeting = '';

  if(curTime >=1 && curTime <12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green'
  } else if (curTime >=12 && curTime <16) {
    greeting = "Good Noon";
    cssStyle.color = 'blue'
  } else if (curTime >=16 && curTime <19) {
    greeting = "Good Evening";
    cssStyle.color = 'pink'
  } else {
    greeting = "Good Night";
    cssStyle.color = 'black'
  }

  return (
    <div style={heading}>
      <h1 style={master}>Hello Developers, <span style={inside}> Just wanted to say</span>  - <span style={cssStyle}> {greeting}</span></h1>
    </div>
  )

}

export default App;