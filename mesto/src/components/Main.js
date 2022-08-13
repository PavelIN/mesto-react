
import avatar from '../images/avatar.jpg';

const Main = () => {
    return (
        <>
            <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={avatar} alt="фото профиля"/>
                    <button className="profile__avatar-btn"></button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-container">
                        <h1 className="profile__subtitle">Жак-Ив Кусто</h1>
                        <button className="profile__edit-btn" type="button"></button>
                    </div>
                    <p className="profile__title">Исследователь океана</p>
                </div>
                <button className="profile__image-btn" type="button"></button>
            </section>
            <section className="elements"></section>
        </main>
        </>
    );
};

export default Main;