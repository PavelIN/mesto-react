import PopupWithForm from './PopupWithForm';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const EditProfilePopup = (props) => {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName]= React.useState(currentUser.name);
    const [description, setDescription ] = React.useState(currentUser.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onUpdateUser({
            name:name,
            about: description,
          });
          props.onClose();
    }

    function handleChange(e) {
        setName(e.target.value);
      }

    function handleChangeDes(e) {
        setDescription(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 


return (<PopupWithForm
        isOpen={props.isOpen}
        name ="profile"
        onClose={props.onClose}
        formName="add-form"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onSubmit={handleSubmit}
        >
        <fieldset className="form__set">
          <input onChange={handleChange} id="name" className="form__input form__input_item_name" type="text" name="profilename"
           placeholder="имя" required minLength="2" maxLength="40"/>
          <span className="form__input-error name-error"></span>
          <input onChange={handleChangeDes} id="job" className="form__input form__input_item_job" type="text" name="job"
           placeholder="вид деятельности" required minLength="2" maxLength="200"/>
          <span className="job-error form__input-error"></span>
        </fieldset>
        </PopupWithForm>)
}

export default EditProfilePopup;