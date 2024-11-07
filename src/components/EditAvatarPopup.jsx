import PopupWithForm from "./PopupWithForm"

const EditAvatarPopup = (props) => {


  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.handleSubmit}
    >
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
    </PopupWithForm>
  )
}

export default EditAvatarPopup