import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

import { CurrentUserContext } from './context/CurrentUserContext';

import api from './utils/api';
import EdithProfilePopup from './components/EdithProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup';

const userDateInit = {
  _id: null,
  name: null,
  email: null,
  avatar: null,
}

function App() {

  const [currentUser, setCurrentUser] = useState(userDateInit)

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState(null)

  const [cards, setCards] = useState([])


  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        console.log(res)
        setCurrentUser(res)
      })
      .catch((err) => {
        setCurrentUser(null)
      })
  }, [])


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

  const handleUpdateUser = (user) => {
    api.updateUserInfo(user.name, user.about)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.name,
          about: res.about
        })
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdateAvatar = (avatar) => {
    api.updateAvatarUser(avatar.avatar)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          avatar: res.avatar
        })
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // cards

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(({ _id }) => _id === currentUser._id)

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      console.log(newCard)
      setCards((state) => state.map((c) => {
        if (c._id === newCard._id) {
          return newCard
        } else {
          return c
        }
      }))
    })
  }

  const handleCardDelete = (id) => {
    api.deleteCard(id).then(() => {
      setCards((state) => state.filter((card) => card._id !== id))
    })
  }

  const handleAddPlaceSubmit = (card) => {
    api.addCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div class="page">
      <CurrentUserContext.Provider value={currentUser}>
        {/* header elements */}
        <Header />
        {/* main elements */}
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}

          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        {/* footer elements */}
        <Footer />
        {/* <!-- Popup to open the create card form --> */}

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
        {/* <PopupWithForm title="Agregar una nueva tarjeta" selector=".popup--create-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
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
        </PopupWithForm> */}
        {/* <!-- Popup to open the update profile form --> */}
        <EdithProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        {/* <PopupWithForm title="Actualizar tu perfil" selector=".popup--update-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
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
        </PopupWithForm> */}


        {/* <!-- popup update image user me --> */}
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        {/* <PopupWithForm title="Actualizar tu perfil" selector=".popup--upload-avatar-user-me" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <form className="form popup__form" action="">
            <div className="form__field-component">
              <input
                className="form__input popup__form-input"
                id="input-profile-url-image"
                name="avatar"
                type="url"
                required
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
        </PopupWithForm> */}

        {/* <!-- Popup to open the imagen of selected card --> */}


        {selectedCard?.url && <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />}
        {/* <!-- popup confirm delete card --> */}
      </CurrentUserContext.Provider>


    </div>
  );
}

export default App;
