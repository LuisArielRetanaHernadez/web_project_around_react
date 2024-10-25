

const Main = () => {
  return (
    <main className="content">
      <section className="profile content__seccion">
        <div className="profile__content-image">
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
            <span className="button profile__button-update-profile">
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

        <button className="button profile__button-add-target">
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
    </main>
  )
}

export default Main