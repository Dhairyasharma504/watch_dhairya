/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
      background-color: black;
    }
  }
  .navbar-item {
    padding: 0 8px 0;
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    outline: none;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    color: #fff;
    font-size: 24px;
    border-radius: 4px;
  }
  .menu {
    height: 3px;
    width: 20px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src="https://colorlib.com/preview/theme/watch/img/logo.png"
                  alt="site logo"
                />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true  " className="menu" />
                <span aria-hidden="true" className="menu" />
                <span aria-hidden="true " className="menu" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/Feature" className="navbar-item">
                  About
                </Link>
                <Link to="/news" className="navbar-item">
                  SERVICE
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
                <Link to="/news" className="navbar-item">
                  UNIQUE FEATURES
                </Link>
                <Link to="/news" className="navbar-item">
                  REVIEW
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
