import React, { Component } from 'react';
import FlashCardList from './FlashCardList';

class App extends Component {
  state = { FlashCards: [
    {id: 1, front: 'Front1', back: 'Back1'},
    {id: 2, front: 'Front2', back: 'Back2'},
    {id: 3, front: 'Front3', back: 'Back3'},
    {id: 4, front: 'Front4', back: 'Back4'},
    {id: 5, front: 'Front5', back: 'Back5'},
    {id: 6, front: 'Front6', back: 'Back6'}
  ]

}
   deleteFlashCard = (id) => {
     const FlashCards = this.state.FlashCards.filter(card => card.id !== id);
     this.setState({FlashCards});
  }

  render() {
    return (
      <div>
        <h1>Flash Cards</h1>
        <FlashCardList  flashCards={this.state.FlashCards}
         deleteCard={this.deleteFlashCard}
         />
      </div>
    );
  }
}

export default App;
