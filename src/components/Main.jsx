import Api from "../utils/Api.js"
import PopupWithForm from "../utils/PopupWithForm"

// constst 
import {
  URL_BASE,
  GroupId,
  TOKEN
} from '../contast/contast'


const Main = () => {

  const api = new Api({
    baseUrl: `${URL_BASE}/v1/${GroupId}`,
    headers: {
      authorization: TOKEN,
      'Content-Type': 'application/json'
    }
  })

  const handleEditAvatarClick = () => {
    document.querySelector('.popup--update-profile').classList.add('popup--active')
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup--update-profile').classList.add('popup--active')
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup--create-card').classList.add('popup--active')
  }

  return (
    <main className="content">
      <section className="profile content__seccion">
        <div className="profile__content-image" onClick={handleEditAvatarClick}>
          <div className="profile__image-update-content">
            <span className="icon">
              <img
                className="icon__image"
                src="<%= require('./images/pen.svg')%>"
                alt='icon'
              />
            </span>
          </div>
          <img
            className="profile__image"
            src="https://images.unsplash.com/photo-1718414738167-0dd5de626229?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar user me"
          />
        </div>

        <div className="profile__about">
          <div className="profile__content-username-button">
            <span className="button profile__button-update-profile" onClick={handleEditProfileClick}>
              <img
                className="profile__button-update-profile-image profile__button-update-profile-image_hidden-hover"
                src="<%= require('./images/diagonal.svg')%>"
                alt="icon diagonal"
              />
              <img
                className="profile__button-update-profile-image profile__button-update-profile-image_show-hover"
                src="<%= require('./images/diagonal-hover.svg')%>"
                alt="icon diagonal hover"
              />
            </span>
            <p className="profile__name">Mr Murad</p>
          </div>

          <p className="profile__state">Explorador</p>
        </div>

        <button className="button profile__button-add-target" onClick={handleAddPlaceClick}>
          <img
            className="profile__button-add-target-image"
            src="<%= require('./images/plus.svg')%>"
            alt="icon plus"
          />
        </button>
      </section>
      <section className="elements content__seccion">
        <div className="elements__cards"></div>
        <template id="template-card">
          <figure className="card elements__card">
            <span className="icon card__icon-delete">
              <img
                src="<%= require('./images/delete.svg')%>"
                alt='delete icon'
                className="icon__image card__icon-delete-image"
              />
            </span>
            <div className="card__content-image elements__photo-content-image">
              <img className="card__image" alt='ilustra card' />
            </div>
            <figcaption className="card__about elements__photo-about">
              <p className="card__title"></p>
              <div className="card__content-icon-and-likes">
                <span className="icon card__icon-love">
                  <img
                    className="card__icon-love-image card__icon-love-image_standar"
                    src="<%= require('./images/heart.svg')%>"
                    alt="icon love"
                  />
                  <img
                    className="card__icon-love-image card__icon-love-image_hover"
                    src="<%= require('./images/heart-hover.svg')%>"
                    alt="icon love hover"
                  />
                  <img
                    className="card__icon-love-image card__icon-love-image_active"
                    src="<%= require('./images/heart-active.svg')%>"
                    alt="icon love active"
                  />
                </span>
                <span className="card__likes-count"></span>
              </div>
            </figcaption>
          </figure>
        </template>
      </section>
      {/* <!-- Popup to open the create card form --> */}
      <div className="popup popup--create-card">
        <div className="popup__card">
          <span className="icon popup__icon-close">
            <img
              className="icon__image popup__icon-close-image"
              src="<%= require('./images/close.png')%>"
              alt="icon delete"
            />
          </span>
          <h2 className="popup__title">Agrega una tarjeta</h2>
          <div className="popup__content">
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
          </div>
        </div>
      </div>

      {/* <!-- Popup to open the update profile form --> */}


      {/* <!-- Popup to open the imagen of selected card --> */}
      <div className="popup popup--imagen-card">
        <div className="popup__content">
          <span className="icon popup__icon-close">
            <img
              className="icon__image popup__icon-close-image"
              src="<%= require('./images/close.png')%>"
              alt="icon delete"
            />
          </span>
          <div className="popup__content-image">
            <img className="popup__image" alt='ilustrar popup' />
          </div>
          <p className="popup__title"></p>
        </div>
      </div>

      {/* <!-- popup update image user me --> */}

      <div className="popup popup--upload-avatar-user-me">
        <div className="popup__card">
          <span className="icon popup__icon-close">
            <img
              className="icon__image popup__icon-close-image"
              src="<%= require('./images/close.png')%>"
              alt="icon delete"
            />
          </span>
          <h2 className="popup__title">Cambiar foto de perfil</h2>
          <div className="popup__content">
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
          </div>
        </div>
      </div>

      {/* <!-- popup confirm delete card --> */}
      <div className="popup popup--delete-card">
        <div className="popup__card">
          <span className="icon popup__icon-close">
            <img
              className="icon__image popup__icon-close-image"
              src="<%= require('./images/close.png')%>"
              alt="icon delete"
            />
          </span>
          <h2 className="popup__title">¿Estás seguro?</h2>
          <div className="popup__content">
            <button className="button popup__button popup__button-confirm">
              Si
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main