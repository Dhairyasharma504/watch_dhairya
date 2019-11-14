/* eslint-disable jsx-a11y/alt-text */
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
  .cover {
  }
`;
const Globally = () => (
  <Wrapper>
    <div className="main">
      <div className="columns">
        <div className="column">
          <img src="https://colorlib.com/preview/theme/watch/img/about-img.jpg" />
        </div>
        <div className="column">
          <div className="cover">
            <section className="section">
              <div className="container">
                <h3 className="title is-spaced is-size-3 has-text-weight-bold is-size-1-desktop">
                  Globally Connected by Large Network
                </h3>
                <h2 className="subtitle is-spaced is-size-6 has-text-weight-semibold is-family-sans-serif	 ">
                  We are here to listen from you deliver exellence
                </h2>
                <p className="subtitle 	">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod temp or incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim.
                </p>
                <p className="control">
                  <a href="#">
                    <button
                      type="submit"
                      className="button is-secondary is-normal is-info is-rounded has-text-weight-semibold ">
                      GET DETAIL
                    </button>
                  </a>

                  <img src="https://colorlib.com/preview/theme/coffee/img/signature.png" />
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Globally;
