import { useRef } from "react";
import PopupWithForm from './PopupWithForm';
import React from 'react';




const EditAvatarPopup = (props) => {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
        props.onClose();
      } 

return (<PopupWithForm
isOpen={props.isOpen}
name ="avatar"
onClose={props.onClose}
formName="edit-avatar-form"
title="Обновить аватар"
buttonText="Сохранить"
onSubmit={handleSubmit}
>
<fieldset className="form__set">
   <input ref={avatarRef} type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="form__input"
    required/>
    <span className="form__input-error avatar-error"></span>
    </fieldset>
</PopupWithForm>)
}

export default EditAvatarPopup;