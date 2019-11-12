import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4rem;
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
    background-color: #f9f9ff;
    border-radius: 10px;
    box-shadow: 0px 0px 8px -32px wheat;
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
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Expert Technicians
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Professional Service
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Great Support
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="card">
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Technical Skills
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Highly Recomended
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <section className="section">
                    <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-left  ">
                      Positive Reviews
                    </h3>
                    <p className="subtitle has-text-weight-light is-spaced  has-text-left is-size-6 is-family-sans-serif">
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </section>
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
