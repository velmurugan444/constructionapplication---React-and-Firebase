import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div>
      <header>
        <div className="top_nav">
          <div className="container">
            <ul className="list-inline info">
              <li>
                <a href="#">
                  <span className="fa fa-phone" /> 080-3205-9543
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-envelope" /> saeidbabaalian@gmail.com
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li>
                <a href="#">
                  <span>
                    <input
                      type="radio"
                      value="English"
                      onClick={() => {
                        i18n.changeLanguage("en");
                      }}
                    />
                    &nbsp; English
                  </span>
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <span>
                    <input
                      type="radio"
                      value="English"
                      onClick={() => {
                        i18n.changeLanguage("jap");
                      }}
                    />
                    &nbsp; Japanese
                  </span>
                </a>
              </li>
            </ul>
            <ul className="list-inline social_icon">
              <li>
                <a href="">
                  <span className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <span className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="">
                  <span className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <span className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar bootsnav">
          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="">
                <img className="logo" src="images/company-logo.png" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav menu">
                <li>
                  <Link to="/">
                    {t(`home.title`)}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
