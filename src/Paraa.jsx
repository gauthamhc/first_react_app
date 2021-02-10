import React from 'react';

function Paraa() {
  return (
    let curTime = new Date(2020, 5, 2, 12);
    curTime = curTime.getHours();

    let greeting = "";

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
    

  )
}

export default Paraa; 