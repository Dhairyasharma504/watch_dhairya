import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #04091e;
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  p {
    color: ${props => props.theme.darkAccent} !important;
  }
  .content {
    margin-top: 3rem;
  }
`;
const Footer = () => (
  <Wrapper>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-spaced is-size-5 has-text-weight-bold has-text-left">
                About Us
              </h1>
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua
                <i className="far fa-heart" /> by dhairya.
              </h2>
            </div>
            <div className="column">
              <h1 className="title is-spaced is-size-5 has-text-weight-bold has-text-left">
                Newsletter
              </h1>
              <h2 className="subtitle">Stay update with our latest</h2>

              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="ENTER EMAIL"
                  />
                </p>
                <p className="control">
                  <a className="button is-info">
                    <i className="far fa-hand-point-right" />
                  </a>
                </p>
              </div>
            </div>

            <div className="column">
              <h1 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered">
                Follow Us
              </h1>
              <h2 className="subtitle  has-text-centered">Let us be social</h2>
              <div className="icons has-text-centered">
                <span className="icon has-text-info">
                  <i className="fab fa-facebook-f" />
                </span>
                <span className="icon has-text-info">
                  <i className="far fa-comment" />
                </span>
                <span className="icon has-text-info">
                  <i className="fab fa-twitter" />
                </span>
                <span className="icon has-text-info">
                  <i className="fab fa-instagram" />
                </span>
              </div>
            </div>
          </div>

          <div className="content has-text-centered is-spaced">
            <p>
              <strong>WATCH</strong> by
              <a href="https://jgthms.com">DHAIRYA SHARMA</a>. The source code
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Footer;
