import React from 'react';

class FlashCard extends React.Component {
  state = { flipped: false  };

  cardShown = () => {
    const { front, back } = this.props.reveal;
    if(this.state.flipped)
      return <h1 onClick={this.toggleFlipped}>{ back }</h1>
    else
      return <h1 onClick={this.toggleFlipped}>{ front }</h1>
  }

  toggleFlipped = () => {
    this.setState({ flipped: !this.state.flipped})
  }
  
  render() {
    const { deleteCard } = this.props;
    const {id} = this.props.reveal;
    return(
      <div>
        { this.cardShown() }
        <button onClick={() => deleteCard(id)}>Delete</button>
      </div>
    )
  }
}

export default FlashCard;