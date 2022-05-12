import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileButton from './ProfileButton';
import { SiteName } from '../Config/SetupApp';

const NavMenu = (props) => {
  const { navRoutes = [] } = props;

  const onLinkClick = () => {
    // Oculta el menú al hacer click en un enlace
    var nav = document.getElementById("navbarMenuMain");
    var btn = document.getElementById("menu-toggle");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light "
        role="navigation"
      >
        <div className="container">
          <Link className="navbar-brand d-flex" to="/">
            <img
              src="assets/img/logos/logo-light.png"
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
                .filter((x) => x.show)
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
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavMenu;
