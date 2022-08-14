import React from 'react';
import avatar from '../images/avatar.jpg';
import api from '../utils/Api';
import Card from './Cards';


const Main = (props) => {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
          .getUserInfo()
          .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      }, []);


      React.useEffect(() => {
        api
          .getInitialCards()
          .then((data) => {
            setCards(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      }, []);



    return (
        <>
            <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={userAvatar} alt="фото профиля"/>
                    <button className="profile__avatar-btn" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-container">
                        <h1 className="profile__subtitle">{userName}</h1>
                        <button className="profile__edit-btn" onClick={props.onEditProfile} type="button"></button>
                    </div>
                    <p className="profile__title">{userDescription}</p>
                </div>
                <button className="profile__image-btn" onClick={props.onAddPlace} type="button"></button>
            </section>
            <section className="elements">
            {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onTrashClick={props.onTrashClick}/>
          );
        })}
            </section>
        </main>
        </>
    );
};

export default Main;