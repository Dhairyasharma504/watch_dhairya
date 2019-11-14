import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(https://colorlib.com/preview/theme/medcare/img/background/bg_1.png);

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
    color: royalblue;
    margin-right: 3px;
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
            <p className="subtitle has-text-weight-light is-spaced  has-text-centered	">
              Who are in extremely love with eco friendly system.
            </p>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="far fa-user" />
                    </span>
                    Expert Technicians
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-id-card" />
                    </span>
                    Professional Service
                  </h3>

                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-phone-volume" />
                    </span>
                    Great Support
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fas fa-cogs" />
                    </span>
                    Technical Skills
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="far fa-gem" />
                    </span>
                    Highly Recomended
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                    <span className="icon">
                      <i className="fab fa-rocketchat" />
                    </span>
                    Positive Reviews
                  </h3>
                  <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
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
