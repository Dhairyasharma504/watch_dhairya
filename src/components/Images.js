/* eslint-disable jsx-a11y/img-redundant-alt */
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
  .card-image {
    padding: 40px;
  }
`;
const Images = () => (
  <Wrapper>
    <section className="hero is-bold">
      <div className="hero-body">
        <h1 className="title is-spaced is-size-2 has-text-weight-bold has-text-centered ">
          Some Features that Made us Unique
        </h1>
        <h1 className="subtitle has-text-weight-light is-spaced  has-text-centered">
          Who are in extremely love with eco friendly system.
        </h1>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <div className="image">
                  <img
                    src=" https://colorlib.com/preview/theme/watch/img/u1.jpg"
                    alt="Placeholder image"
                  />
                </div>
              </div>
              <div className="media-content">
                <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered ">
                  John Smith
                </h3>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <div className="image ">
                  <img
                    src="https://colorlib.com/preview/theme/watch/img/u2.jpg"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <div className="image ">
                  <img
                    src=" https://colorlib.com/preview/theme/watch/img/u3.jpg"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <div className="image">
                  <img
                    src=" https://colorlib.com/preview/theme/watch/img/u4.jpg"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Images;
