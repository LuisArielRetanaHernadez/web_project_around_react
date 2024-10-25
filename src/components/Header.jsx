import logo from "../images/logo.svg"
const Header = () => {
  return (
    <header className="header page__header">
      <figure className="logo header__logo">
        <img
          className="logo__image"
          src={logo}
          alt="logo"
        />
      </figure>
    </header>
  )
}

export default Header;