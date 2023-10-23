import React, { useState, useEffect } from 'react';
import "./Score.css";

function Score({ turns, displayFlag, updateDisplayVal }) {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const body = document.body;

  const display = () => {
    if (turns < 10) {
      setText("Great Job!!");
    } else if (turns >= 10 && turns < 14) {
      setText("That's Fair");
    } else {
      setText("I'd check with a doctor if I were you");
    }
    setText2(`You took ${turns} tries to finish`);
  }

  useEffect(() => {
    if (displayFlag) {
        // setTimeout(()=>{
          display();
        // },5000)
    }else{
      setTimeout(()=>{
        setText('');
        setText2('');
      },2000)
    }
  }, [displayFlag, turns, setText, setText2]);

  useEffect(() => {
    if(displayFlag){
      setTimeout(()=>{
        updateDisplayVal(false);
      }, 6000)
    }
  });

  // const styles = {
  //   filter: 'blur(5px)', /* Start with a blur of 5 pixels */
  //   transition: 'filter 0.3s',
  // };  

  return (
    <div className={`display ${displayFlag ? 'displayunhide': 'displayhidden'}`}>
      <h1>{text}</h1>
      <h3>{text2}</h3>
    </div>
  )
}

export default Score;



  