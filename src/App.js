import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div class="page">
      {/* header elements */}
      <Header />
      {/* main elements */}
      <Main />
      {/* footer elements */}
      <Footer />
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
      <div className="popup popup--update-profile">
        <div className="popup__card">
          <span className="icon popup__icon-close">
            <img
              className="icon__image popup__icon-close-image"
              src="<%= require('./images/close.png')%>"
              alt="icon delete"
            />
          </span>

          <h2 className="popup__title">Actualiza tu perfil</h2>

          <div className="popup__content">
            <form className="form popup__form" action="">
              <div className="form__field-component">
                <input
                  className="form__input popup__form-input"
                  id="input-profile-name"
                  name="name"
                  required
                  minlength="7"
                  maxlength="15"
                />
                <span
                  className="form__error-message"
                  id="input-profile-name-error"
                ></span>
              </div>

              <div className="form__field-component">
                <input
                  className="form__input popup__form-input"
                  id="input-profile-state"
                  name="state"
                  required
                  minlength="7"
                  maxlength="15"
                  type="text"
                />
                <span
                  className="form__error-message"
                  id="input-profile-state-error"
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
    </div>
  );
}

export default App;
