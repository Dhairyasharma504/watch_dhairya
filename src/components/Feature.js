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
const Feature = () => (
  <Wrapper>
    <div className="main">ss</div>
  </Wrapper>
);
export default Feature;
