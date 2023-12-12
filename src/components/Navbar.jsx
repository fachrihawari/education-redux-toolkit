import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import { useSelector } from "react-redux";

function Navbar() {

  const count = useSelector(function selector(state) {
    return state.counter.count
  })
  return (
    <nav className="navbar container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={Logo} width="56" height="56" alt="app logo" />
          <span className="title is-4">Reaksi Ayam</span>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home ({count})
          </Link>
          <Link to="/menu" className="navbar-item">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
