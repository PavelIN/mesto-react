import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [selectDelete, setSelectDelete] = React.useState(false);

    const handleRemoveClick = () => {
        setSelectDelete(!selectDelete);
      };


    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
      };
    
      const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
      };
    
      const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
      };
    
      const handleCardClick = card => {
        setSelectedCard(card);
      };

      const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectDelete(false);
        setSelectedCard({});
      };


  return (
    <div className="body">
    <div className="page">
        <Header />
        <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onTrashClick={handleRemoveClick}
        />
        <Footer />
        <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name ="profile"
        onClose={closeAllPopups}
        formName="add-form"
        title="Редактировать профиль"
        buttonText="Сохранить"
        >
        <fieldset className="form__set">
          <input id="name" className="form__input form__input_item_name" type="text" name="profilename"
           placeholder="имя" required minLength="2" maxLength="40"/>
          <span className="form__input-error name-error"></span>
          <input id="job" className="form__input form__input_item_job" type="text" name="job"
           placeholder="вид деятельности" required minLength="2" maxLength="200"/>
          <span className="job-error form__input-error"></span>
        </fieldset>
        </PopupWithForm>
        
        <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name ="avatar"
        onClose={closeAllPopups}
        formName="edit-avatar-form"
        title="Обновить аватар"
        buttonText="Сохранить"
        >
        <fieldset className="form__set">
           <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="form__input"
            required/>
            <span className="form__input-error avatar-error"></span>
            </fieldset>
        </PopupWithForm>
         

        <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name ="url"
        onClose={closeAllPopups}
        formName="add-form"
        title="Новое место"
        buttonText="Создать"
        >
            <fieldset className="form__set">
                        <input id="title" className="form__input form__input_item_target" type="text" name="name"
                            placeholder="Название" required minLength="2" maxLength="30"/>
                        <span className="form__input-error title-error"></span>
                        <input id="link" className="form__input form__input_item_url" type="url" name="link"
                            placeholder="Ссылка на картинку" required/>
                        <span className="form__input-error link-error"></span>
                    </fieldset>
       </PopupWithForm>
  
       <PopupWithForm
        isOpen={selectDelete}
        name ="delete-card"
        onClose={closeAllPopups}
        formName="add-form"
        title="Вы уверены?"
        buttonText="Да"
        >
        <fieldset className="form__set">
        </fieldset>
       </PopupWithForm>

       <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    </div>
    </div>
  );
}

export default App;
