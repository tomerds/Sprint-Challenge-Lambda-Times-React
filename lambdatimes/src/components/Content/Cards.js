import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Card from './Card';

const Cards = props => {
  console.log(props.cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((e, index) => <Card card={e} key={index} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards;