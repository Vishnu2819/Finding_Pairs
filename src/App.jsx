import React, { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import ConfettiComponent from './components/Confetti';
import Score from './components/Score';

const cardImages = [
  { src: "./img2/MC-1.jpeg", matched: false },
  { src: "./img2/MC-2.jpeg", matched: false },
  { src: "./img2/MC-3.jpeg", matched: false },
  { src: "./img2/MC-4.jpeg", matched: false },
  { src: "./img2/FC-1.jpeg", matched: false },
  { src: "./img2/FC-2.jpeg", matched: false },
  { src: "./img2/FC-3.jpeg", matched: false },
  { src: "./img2/FC-4.jpeg", matched: false }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [display, setDisplay] = useState(false);
  
  // Handle the choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Decision
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset the choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Initialize the game
  const initializeGame = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setConfettiActive(false);
    setGameStarted(true);
    setDisplay(false);
  };

  // Check if all cards are matched
  useEffect(() => {
    if (gameStarted) {
      const areAllCardsMatched = cards.every((card) => card.matched);
      if (areAllCardsMatched) {
        startConfetti();
        displayScore();
      }
    }
  }, [cards, gameStarted]);

  const startConfetti = () => {
    setConfettiActive(true);
  };


  const displayScore = () => {
    setTimeout(() => {
      setDisplay(true);
    }, 5000);
  }
  return (
    <>
    <div id={display?'blur':'unblur'}>
      <div className='App'>
      <h1>Find the Pairs!!</h1>
      {!gameStarted ? (
        <button onClick={initializeGame}>Start Game</button>
      ) : <button onClick={initializeGame}>New Game</button>}
      
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div>
        <h2>Turns : {turns}</h2>
      </div>
      <ConfettiComponent active={confettiActive} updateactivity={setConfettiActive} />
    </div>
    </div>
    <div>
      <Score turns = {turns} displayFlag = {display} updateDisplayVal={setDisplay}/>
    </div>
    </>
  );
}

export default App;


