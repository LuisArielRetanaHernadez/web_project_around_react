import deleteImage from '../images/delete.svg'

import heartImage from '../images/heart.svg'
import heartHoverImage from '../images/heart-hover.svg'
import heartActiveImage from '../images/heart-active.svg'

const Card = (props) => {
  return (
    <figure class="card elements__card">
      <span class="icon card__icon-delete">
        <img
          src={deleteImage}
          alt="icon delete"
          class="icon__image card__icon-delete-image"
        />
      </span>
      <div class="card__content-image elements__photo-content-image">
        <img class="card__image" alt={props.name || 'ilustract'} />
      </div>
      <figcaption class="card__about elements__photo-about">
        <p class="card__title">{props.title}</p>
        <div class="card__content-icon-and-likes">
          <span class="icon card__icon-love">
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
          <span class="card__likes-count"></span>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card