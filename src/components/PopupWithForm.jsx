const PopupWithForm = (props) => {
  return (
    <div className={`popup popup--${props.name}`}>
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
  )
}

export default PopupWithForm