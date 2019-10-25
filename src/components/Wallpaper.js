/* eslint-disable react/no-unknown-property */
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
  .main{
    background-image:url(https://i01.appmifile.com/webfile/globalimg/7/3A4840F5-D07A-6403-69D1-7BFE8D9F0977.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

}
  }
`;
const Wallpaper = () => (
  <Wrapper>
    <div className="main">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Fullheight title</h1>
            <h2 class="subtitle">Fullheight subtitle</h2>
          </div>
        </div>
      </section>
    </div>
  </Wrapper>
);
export default Wallpaper;
