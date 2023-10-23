import Confetti from 'react-confetti';

const ConfettiComponent = ({ active, updateactivity}) => {

if(active){
  
  return (  
    <>
    <Confetti
      recycle = {false}
      tweenDuration={60000}
      numberOfPieces={500} // You can adjust the number of confetti pieces
    />
    </>
    );
    updateactivity = false;
}
};

export default ConfettiComponent;
