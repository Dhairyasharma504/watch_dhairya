/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #04091e;
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
  h2 {
    color: ${props => props.theme.lightShades} !important;
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  p {
    color: ${props => props.theme.darkAccent} !important;
  }
  .card-image {
    padding: 35px;
    padding-bottom: 0rem;
  }
  .card {
    border-radius: 1rem;
    align-self: center;
    margin-right: 1rem;
  }
  
`;
const Images = () => (
  <Wrapper>
    <section className="hero is-bold">
      <div className="hero-body">
        <h1 className="title  is-size-2 has-text-weight-bold has-text-centered ">
          Some Features that Made us Unique
        </h1>
        <h1 className="subtitle has-text-weight-light has-text-centered">
          Who are in extremely love with eco friendly system.
        </h1>
      </div>
    </section>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <div className="image">
                <img
                  src="https://www.alternate.co.uk/p/o/9/Apple_Watch_Series_4__Smartwatch@@9awa1adu.jpg"
                  alt="Placeholder image"
                />
                <div className="media-content has-text-centered">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered ">
                    Watch White
                  </h3>
                  <h2 className="title is-spaced is-size-6 has-text-weight-bold has-text-centered ">
                    ‎€ 399.00
                  </h2>
                  <button
                    type="submit"
                    className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold">
                    PRE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <div className="image ">
                <img
                  src="https://ae01.alicdn.com/kf/HTB19cJELVXXXXcDXpXXq6xXFXXXm/LEMFO-LF07-Bluetooth-Smart-Watch-Life-Waterproof-Fitness-Tracker-Smartwatch-for-Apple-Watch-Huawei-Android-IOS.jpg"
                  alt="Placeholder image"
                />
                <div className="media-content has-text-centered">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered ">
                    Watch Green
                  </h3>
                  <h2 className="title is-spaced is-size-6 has-text-weight-bold has-text-centered ">
                    ‎€ 399.00
                  </h2>
                  <button
                    type="submit"
                    className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold">
                    PRE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <div className="image ">
                <img
                  src="https://www.did.ie/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/u/mu6d2ba.jpg"
                  alt="Placeholder image"
                />
                <div className="media-content has-text-centered">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered ">
                    Watch Gray
                  </h3>
                  <h2 className="title is-spaced is-size-6 has-text-weight-bold has-text-centered ">
                    ‎€ 399.00
                  </h2>
                  <button
                    type="submit"
                    className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold">
                    PRE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <div className="image">
                <img
                  src=" https://img.sunsky-online.com/upload/store/product_l/WA5875B.jpg"
                  alt="Placeholder image"
                />
                <div className="media-content has-text-centered">
                  <h3 className="title is-spaced is-size-5 has-text-weight-bold has-text-centered ">
                    Watch Black
                  </h3>
                  <h2 className="title is-spaced is-size-6 has-text-weight-bold has-text-centered ">
                    ‎€ 399.00
                  </h2>
                  <button
                    type="submit"
                    className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold has-text-centered">
                    PRE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Images;
