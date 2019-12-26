import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgba(114, 129, 130, 0.09),
      rgba(181, 199, 182, 0.08)
    ),
    url(https://media.indiaistore.com/themes/frontend/images/uploads/watch/great-accessiories.png);
  background-repeat: no-repeat;
  background-position: right;
  background-color: #fff;
  color: #777;
  height: 23rem;

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
const Wallpaper2 = () => (
  <Wrapper>
    <div className="main">
      <div className="columns">
        <div className="column">
          <section className="section is-medium">
            <div className="container">
              <h3 className="title is-spaced is-size-2 has-text-left  has-text-weight-light">
                Fitness & Health Stay Motivated. Stay healthy.
              </h3>

              <p className="subtitle has-text-left">
                Throuthout the day, Apple Watch measures Your workouts, tracks
                your activity and helps encourage healthy routines.All adding up
                to a better you.
              </p>
            </div>
          </section>
        </div>
        <div className="column" />
      </div>
    </div>
  </Wrapper>
);
export default Wallpaper2;
