/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  .imagess {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.41),
        rgba(0, 0, 0, 0.74)
      ),
      url(https://colorlib.com/preview/theme/watch/img/video-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 9px;
    box-shadow: 3px 6px 12px 1px beige;
    height: 18rem;
  }
  .play {
    text-align: center;
    padding: 7rem;
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
              </div>
              <div className="column imagess">
                <div className="play">
                  <Link>
                    <img src="https://colorlib.com/preview/theme/watch/img/play-icon.png" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default Vedio;
