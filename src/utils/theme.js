/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#ffffff';
const lightShades = '#5784ed';
const darkAccent = '#777777';
const darkShades = '#000000';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#8B8989',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Poppins', sans-serif",
  secondaryFontFamily: "'Open Sans', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.primaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 17px;
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .title {
    font-family: ${theme.primaryFontFamily};

  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor} !important;
  }
  .subtitle {
    color: ${theme.darkAccent} !important;
    font-size: 14px;
    line-height: 1.625em;
  }
  .button.is-primary {
    text-align: center;
    padding-left: 35px;
    padding-right: 35px;


    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    color: #000000;
    :hover {
      background-color: transparent;
      border: 1px solid white !important;
    }
  }
  .button.is-secondary { text-align: center;
    padding-left: 35px;
    padding-right: 35px;
    margin-right: 2rem;
    margin-bottom: 2rem;


background-color: #222222;
transition: background-color 0.2s ease;
color: #ffffff;
:hover {
background-color: transparent;
color: #000000
border: 1px solid black !important;
    
    }
    
  }
  .button.is-link {
    background-color: ${theme.darkAccent};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.darkAccent)};
    }
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
`;

export default GlobalStyle;
