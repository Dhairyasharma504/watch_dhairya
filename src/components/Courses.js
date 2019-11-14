/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(https://colorlib.com/preview/theme/medcare/img/background/bg_1.png);

  h2 {
    color: ${props => props.theme.lightShades} !important;
  }
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  p {
    color: ${props => props.theme.darkAccent} !important;
  }
  .icon {
    font-size: 22px;
    margin-right: 10px;
    color: #235ee7;
  }
`;
const Courses = () => (
  <Wrapper>
    <div className="main">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <h3 className="title is-spaced is-size-2 has-text-weight-bold has-text-centered  ">
                Top Courses That are open for Students
              </h3>
              <p className="subtitle has-text-weight-light is-spaced  has-text-centered	">
                Who are in extremely love with eco friendly system.
              </p>
            </section>
            <div className="columns">
              <div className="column">
                <section className="section">
                  <div className="container">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      <div className="icon">
                        <i className="fas fa-rocket" />
                      </div>
                      High Performance
                    </h3>
                    <p className="subtitle is-spaced  has-text-left	">
                      Lorem ipsum dolor sit amet, consectetur adipisic ing elit,
                      seddo eiusmod tempor incid.idunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </section>
                <section className="section">
                  <div className="container">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      <div className="icon">
                        <i className="fas fa-cog" />
                      </div>
                      High Performance
                    </h3>
                    <p className="subtitle is-spaced  has-text-left	">
                      Lorem ipsum dolor sit amet, consectetur adipisic ing elit,
                      seddo eiusmod tempor incid.idunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </section>
              </div>
              <div className="column">
                <img src="https://colorlib.com/preview/theme/watch/img/c1.png" />
              </div>
              <div className="column">
                <section className="section">
                  <div className="container">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      <div className="icon">
                        <i className="far fa-building" />
                      </div>
                      High Performance
                    </h3>
                    <p className="subtitle is-spaced  has-text-left	">
                      Lorem ipsum dolor sit amet, consectetur adipisic ing elit,
                      seddo eiusmod tempor incid.idunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </section>
                <section className="section">
                  <div className="container">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      <div className="icon">
                        <i className="fas fa-phone-volume" />
                      </div>
                      High Performance
                    </h3>
                    <p className="subtitle is-spaced  has-text-left	">
                      Lorem ipsum dolor sit amet, consectetur adipisic ing elit,
                      seddo eiusmod tempor incid.idunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default Courses;
