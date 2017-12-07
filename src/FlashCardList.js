import React from 'react';
import FlashCard from './FlashCard.js'

const DisplayFlashCard = (Cards, deleteCard) => {
  return Cards.map( card => {
    return(
      
      <FlashCard reveal={card} deleteCard={deleteCard} />
    )
  }

  )

}

const FlashCardList = (props) => (
    <div>
      {DisplayFlashCard(props.flashCards, props.deleteCard)}
    </div>
  )


export default FlashCardList;