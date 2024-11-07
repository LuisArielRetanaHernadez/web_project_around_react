import deleteImage from '../images/delete.svg'

import heartImage from '../images/heart.svg'
import heartHoverImage from '../images/heart-hover.svg'
import heartActiveImage from '../images/heart-active.svg'

import { CurrentUserContext } from '../context/CurrentUserContext'
import { useContext } from 'react'

const Card = (props) => {

  const currentUser = useContext(CurrentUserContext)

  const isLiked = props.likes.some(({ _id }) => _id === currentUser._id)

  const cardLikeButtonClassName = `icon card__icon-love ${isLiked && 'card__icon-love_active'}`
  const handleClick = () => {
    props.onCardClick({
      url: props.url,
      title: props.title,
      likes: props.likes
    })
  }

  return (
    <figure class="card elements__card">
      {currentUser._id === props._id &&
        <span class="icon card__icon-delete" onClick={() => props.onCardDelete(props._id)}>
          <img
            src={deleteImage}
            alt="icon delete"
            class="icon__image card__icon-delete-image"
          />
        </span>}

      <div class="card__content-image elements__photo-content-image" onClick={() => handleClick()}>
        <img class="card__image" src={props.url} alt={props.title || 'ilustract'} />
      </div>
      <figcaption class="card__about elements__photo-about">
        <p class="card__title">{props.title}</p>
        <div class="card__content-icon-and-likes">
          <span class={cardLikeButtonClassName} onClick={() => props.onCardLike({ _id: props._id, likes: props.likes })}>
            <img
              class="card__icon-love-image card__icon-love-image_standar"
              src={heartImage}
              alt="icon love"
            />
            <img
              class="card__icon-love-image card__icon-love-image_hover"
              src={heartHoverImage}
              alt="icon love hover"
            />
            <img
              class="card__icon-love-image card__icon-love-image_active"
              src={heartActiveImage}
              alt="icon love active"
            />
          </span>
          <span class="card__likes-count">
            {props.likes.length}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card