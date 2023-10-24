import React, { useState, useEffect } from 'react';
import "./Score.css";

function Score({ turns, displayFlag, updateDisplayVal }) {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const body = document.body;
 //displays a score and a feedback message to the user
  const display = () => {
    if (turns < 12) {
      setText("Incredible! You've got a great memory");
    } else if (turns >= 12 && turns < 16) {
      setText("Great job! Keep it up!");
    } else if (turns >= 16 && turns < 20) {
      setText("Good job!Keep trying!");
    } else {
      setText("I'd check with a doctor if I were you");
    }
    setText2(`You took ${turns} tries to finish`);
  }
 //Triggered when all the cards match and executes the function which stores the Appropriate values into the hooks
  useEffect(() => {
    if (displayFlag) {
          display();
    }else{
      setTimeout(()=>{
        setText('');
        setText2('');
      },2000)
    }
  }, [displayFlag, turns, setText, setText2]);
 //used to automatically hide or dismiss the displayed message after it has been visible for 6 seconds
  useEffect(() => {
    if(displayFlag){
      setTimeout(()=>{
        updateDisplayVal(false);
      }, 6000)
    }
  });
  //Returns the Hooks which are required for pop-up 
  return (
    <div className={`display ${displayFlag ? 'displayunhide': 'displayhidden'}`}>
      <h1>{text}</h1>
      <h3>{text2}</h3>
    </div>
  )
}

export default Score;



  
