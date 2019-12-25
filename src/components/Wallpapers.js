import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(https://media.indiaistore.com/themes/frontend/images/uploads/watch/for-everyone.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
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
const Wallpapers = () => (
  <Wrapper>
    <div className="main" />
  </Wrapper>
);
export default Wallpapers;
