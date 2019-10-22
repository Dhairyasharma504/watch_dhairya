/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-indent */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    color: ${props => props.theme.lightShades} !important;
  }
  h3 {
    color: ${props => props.theme.darkShades} !important;
  }
  h4 {
    color: ${props => props.theme.darkAccent} !important;
  }
`;
const Vedio = () => (
  <Wrapper>
    <div className="main">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <section className="section">
                  <div className="container">
                    <h2 className="subtitle is-spaced is-size-7 has-text-weight-semibold	">
                      BRAND NEW APP TO BLOW YOUR MIND
                    </h2>
                    <h3 className="title is-spaced is-size-2 has-text-weight-bold ">
                      We’ve made a life that will change you
                    </h3>
                    <h3 className="subtitle is-spaced is-size-6 has-text-weight-semibold is-family-sans-serif	 ">
                      We are here to listen from you deliver exellence
                    </h3>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </p>
                    <p className="control">
                      <a href="#">
                        <button
                          type="submit"
                          className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold ">
                          GET STARTED
                        </button>
                      </a>
                    </p>
                  </div>
                </section>
              </div>
              <div className="column">
                <figure className="image is-16by9">
                  <iframe
                    className="has-ratio"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                    frameBorder="0"
                    allowFullScreen></iframe>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default Vedio;
