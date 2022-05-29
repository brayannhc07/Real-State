import React, { useContext, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileButton from './ProfileButton';
import { SiteName } from '../Config/SetupApp';
import { sessionContext } from "../Context/sessionContext";

const NavMenu = (props) => {
  const { navRoutes = [] } = props;
  const { isLogged } = useContext(sessionContext);

  const onLinkClick = () => {
    // Oculta el menú al hacer click en un enlace
    var nav = document.getElementById("navbarMenuMain");
    var btn = document.getElementById("menu-toggle");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  return (
    <Fragment>
      <header
        className="navbar navbar-expand-lg navbar-light bg-light "
        role="navigation"
      >
        <nav className="container-fluid">
          <Link className="navbar-brand d-flex" to="/">
            <img
              src="assets/images/logos/logo.png"
              alt=""
              width="auto"
              height="34"
              className="d-inline-block align-text-top me-3"
            />
            <span className="d-none d-lg-block">{SiteName}</span>
          </Link>
          <button
            id="menu-toggle"
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenuMain"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenuMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              {navRoutes
                .filter((x) => x.show && ((isLogged === true && x.auth === true) || !x.auth))
                .map((value) => {
                  return (
                    <li
                      className="nav-item"
                      key={value.route}
                      onClick={onLinkClick}
                    >
                      <NavLink className="nav-link" to={value.route}>
                        {value.display}
                      </NavLink>
                    </li>
                  );
                })}
              <form className="d-flex align-items-center mx-auto">
                <ProfileButton />
              </form>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};
export default NavMenu;
