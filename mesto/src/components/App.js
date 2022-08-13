import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  return (
    <div>
    <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_profile">
            <div className="popup__container">
                <button className="popup__close" type="button"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="form" name="add-form" novalidate>
                    <fieldset className="form__set">
                        <input id="name" className="form__input form__input_item_name" type="text" name="profilename"
                            placeholder="имя" required minlength="2" maxlength="40"/>
                        <span className="form__input-error name-error"></span>
                        <input id="job" className="form__input form__input_item_job" type="text" name="job"
                            placeholder="вид деятельности" required minlength="2" maxlength="200"/>
                        <span className="job-error form__input-error"></span>
                        <button className="form__save" type="submit">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_url">
            <div className="popup__container">
                <button className="popup__close popup__close-img" type="button"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="form form-img" name="add-form" novalidate>
                    <fieldset className="form__set">
                        <input id="title" className="form__input form__input_item_target" type="text" name="name"
                            placeholder="Название" required minlength="2" maxlength="30"/>
                        <span className="form__input-error title-error"></span>
                        <input id="link" className="form__input form__input_item_url" type="url" name="link"
                            placeholder="Ссылка на картинку" required/>
                        <span className="form__input-error link-error"></span>
                        <button className="form__save " type="submit">Создать</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_item-img">
            <div className="popup__container popup__container_item_img">
                <button className=" popup__close popup__close_item_img" type="button"></button>
                <img className="popup__img"/>
                <p className="popup__title-img"></p>
            </div>
        </div>
        <div className="popup popup_type_delete-card">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <form className="form form-delete" name="add-form" novalidate>
                    <fieldset className="form__set">
                        <button type="submit" className="form__save">Да</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form name="edit-avatar-form" className="form-avatar form" novalidate>
                    <fieldset className="form__set">
                        <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="form__input"
                            required/>
                        <span className="form__input-error avatar-error"></span>
                        <button type="submit" className="form__save">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <template className="element-template">
            <div className="element">
                <img src=" " className="element__image"/>
                <button type="button" className="element__trash"></button>
                <div className="element__container">
                    <h2 className="element__text"></h2>
                    <div>
                        <button className="element__like-btn" type="button"></button>
                        <span className="element__like-counter"></span>
                    </div>
                </div>
            </div>
        </template>
    </div>
    </div>
  );
}

export default App;
