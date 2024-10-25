import { React } from 'react'
const PopupWithForm = (props) => {
  return (
    <div className={`popup ${props.selector}  ${props.isOpen ? 'popup--active' : ''}`}>
      <div className="popup__card">
        <span className="icon popup__icon-close">
          <img
            className="icon__image popup__icon-close-image"
            src="<%= require('./images/close.png')%>"
            alt="icon delete"
          />
        </span>

        <h2 className="popup__title">{props.title}</h2>

        <div className="popup__content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm