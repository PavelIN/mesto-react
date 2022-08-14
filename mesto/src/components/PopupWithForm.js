import React from "react";

const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_visible" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={`${props.formName}`}
          className="form"
          noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;