import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(https://media.indiaistore.com/themes/frontend/images/uploads/watch/great-accessiories.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #fff;
  color: #777;
  height: 30rem;

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
    <div className="main" />
  </Wrapper>
);
export default Wallpaper2;
