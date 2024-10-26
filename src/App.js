import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState(null)


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(prev => !prev)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(prev => !prev)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(prev => !prev)
  }

  const handleCardClick = (card) => {
    console.log(card)
    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div class="page">
      {/* header elements */}
      <Header />
      {/* main elements */}
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      {/* footer elements */}
      <Footer />
      {/* <!-- Popup to open the create card form --> */}

      <PopupWithForm title="Agregar una nueva tarjeta" selector=".popup--create-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
        <form className="form popup__form" action="">
          <div className="form__field-component">
            <input
              type="text"
              id="input-profile-name"
              className="form__input popup__form-input"
              name="title"
              required
              minlength="2"
              maxlength="30"
              placeholder="title"
            />
            <span
              className="form__error-message"
              id="input-profile-name-error"
            ></span>
          </div>

          <div className="form__field-component">
            <input
              className="form__input popup__form-input"
              id="input-profile-url-image"
              name="url"
              required
              placeholder="url"
              type="url"
            />
            <span
              className="form__error-message"
              id="input-profile-url-image-error"
            ></span>
          </div>

          <button
            className="button form__button-submit popup__button-submit"
            id="button-update-profile"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </PopupWithForm>
      {/* <!-- Popup to open the update profile form --> */}

      <PopupWithForm title="Actualizar tu perfil" selector=".popup--update-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
        <form className="form popup__form" action="">
          <div className="form__field-component">
            <input
              className="form__input popup__form-input"
              id={`input-profile-name`}
              name="name"
              required
              minlength="7"
              maxlength="15"
            />
            <span
              className="form__error-message"
              id={`input-profile-name-error`}
            ></span>
          </div>

          <div className="form__field-component">
            <input
              className="form__input popup__form-input"
              id={`input-profile-state`}
              name="state"
              required
              minlength="7"
              maxlength="15"
              type="text"
            />
            <span
              className="form__error-message"
              id={`input-profile-state-error`}
            ></span>
          </div>

          <button
            className="button form__button-submit popup__button-submit"
            id={`button-update-profile`}
            type="submit"
          >
            Guardar
          </button>
        </form>
      </PopupWithForm>


      {/* <!-- Popup to open the imagen of selected card --> */}

      {/* <!-- popup update image user me --> */}
      {selectedCard?.url && <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />}
      {/* <!-- popup confirm delete card --> */}

    </div>
  );
}

export default App;
