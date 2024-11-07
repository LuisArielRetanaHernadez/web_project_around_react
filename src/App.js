import { useEffect, useState } from 'react';
import './App.css';

// --> components 

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ImagePopup from './components/ImagePopup';


// --> Popup
import EdithProfilePopup from './components/EdithProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup';

// CurrentUserContext
import { CurrentUserContext } from './context/CurrentUserContext';

// Api
import api from './utils/api';

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


    const loadCardsInitial = async () => {
      try {
        const response = await api.getInitialCards()
        setCards(response)
      } catch (error) {

      }
    }

    loadCardsInitial()
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
    api.createCard(card.title, card.url)
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

        {/* <!-- Popup to open the update profile form --> */}
        <EdithProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />



        {/* <!-- popup update image user me --> */}
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />


        {/* <!-- Popup to open the imagen of selected card --> */}


        {selectedCard?.url && <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />}
        {/* <!-- popup confirm delete card --> */}
      </CurrentUserContext.Provider>


    </div>
  );
}

export default App;
