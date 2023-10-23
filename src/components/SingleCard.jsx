import React from 'react'
import "./SingleCard.css"

function SingleCard({card, handleChoice, flipped,  disabled}) {

    const handleClick = () => {
        if(!disabled){
          handleChoice(card)
        }
    }

  return (
    <div className="card" key={card.id}>
            <div className={flipped ? "flipped" : ""}>
              <img src={card.src} alt="card front" className="front" />
              <img src="./img/cover.jpg" height={204} width={202} onClick={handleClick} alt="card back" className="back" />
            </div>
    </div>
  )
}

export default SingleCard
