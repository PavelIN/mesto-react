import React from "react";
import PopupWithForm from './PopupWithForm';

const Card = (props) => {

    const handleClick = () => {
        props.onCardClick(props.card);
      };

  return (
    <div className="element">
                <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
                <button type="button" className="element__trash"></button>
                <div className="element__container">
                    <h2 className="element__text">{props.card.name}</h2>
                    <div>
                        <button className="element__like-btn" type="button"></button>
                        <span className="element__like-counter">{props.card.likes.length}</span>
                    </div>
                </div>
            </div>
  );
};

export default Card;