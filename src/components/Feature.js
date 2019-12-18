import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(https://colorlib.com/preview/theme/watch/img/faq-bg.jpg);
  background-attachment: fixed;
  margin: -1rem;
  h2 {
    color: ${props => props.theme.lightShades} !important;
  }
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  h4 {
    color: ${props => props.theme.darkAccent} !important;
  }
  .card {
    border-radius: 14px;
    box-shadow: 0 0 -2px black;
    padding: 24px;
  }
  .icon {
    margin-right: 7px;
    font-size: 16px;
  }
`;
const Feature = () => (
  <Wrapper>
    <div className="main">
      <body>
        <section className="section">
          <div className="container">
            <h3 className="title is-spaced is-size-2 has-text-weight-bold has-text-centered  ">
              Some Features that Made us Unique
            </h3>
            <h2 className="subtitle has-text-weight-light is-spaced  has-text-centered	">
              Who are in extremely love with eco friendly system.
            </h2>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="far fa-user has-text-info" />
                    </span>
                    Expert Technicians
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star-half-alt" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-id-card has-text-info " />
                    </span>
                    Professional Service
                  </h3>

                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star-half-alt" />
                  </span>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-phone-volume has-text-info" />
                    </span>
                    Great Support
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-cogs has-text-info" />
                    </span>
                    Technical Skills
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="far fa-gem has-text-info" />
                    </span>
                    Highly Recomended
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fab fa-rocketchat has-text-info" />
                    </span>
                    Positive Reviews
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="fas fa-star-half-alt" />
                  </span>
                  <span className="icon has-text-warning">
                    <i className="far fa-star" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  </Wrapper>
);
export default Feature;
