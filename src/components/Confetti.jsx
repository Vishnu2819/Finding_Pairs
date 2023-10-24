import Confetti from 'react-confetti'; 

//React component for rendering a confetti animation
const ConfettiComponent = ({ active, updateactivity}) => {

if(active){
  
  return (  
    <>
    <Confetti
      recycle = {false}  //Avoids looping of the Confetti Components
      tweenDuration={60000}  //how long the confetti will fall or animate on the screen in millisec 
      numberOfPieces={500} // You can adjust the number of confetti pieces
    />
    </>
    );
    updateactivity = false;  //Resets Confetti Component
}
};

export default ConfettiComponent;
