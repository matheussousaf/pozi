import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      max-width: 100vw;
      overflow-x: hidden;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
    }

    body {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-style: normal;

      max-width: 100vw;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      font-size: 14px;

      background: radial-gradient(100% 256% at 0% 0%, #F5762A 0%, #F2AC2F 100%);

      @media(min-width: 325px) {
        font-size: 13px;
      }
      @media(min-width: 370px) {
        font-size: 14px;
      }
      @media(min-width: 1024px) {
        font-size: 15px !important;
      }
      @media(min-width: 1350px) {
        font-size: 16px;
      }
    }

    .rage-font {
      @font-face {font-family: "Rage Italic"; src: url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.eot"); src: url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.woff") format("woff"), url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/21400dc679986534519c638136d62dbf.svg#Rage Italic") format("svg"); }
      font-family: 'Rage Italic' !important;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-animation: autofill 0s forwards;
      animation: autofill 0s forwards;

      @keyframes autofill {
        100% {
          background: #121212;
          color: #aaa;
          font-size: 15px;
        }
      }

      @-webkit-keyframes autofill {
        100% {
          background: #121212;
          color: #aaa;
          font-size: 15px;
        }
      }
    }

    textarea,
    p,
    h1, h2, h3, h4, h5,
    span {
      user-select: auto;
      font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
      font-style: normal;
      /* font-weight: normal; */
      text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
      -webkit-touch-callout: auto;
    }

    input,
    input[type="range"] {
      outline: none;
      font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
      font-size: 1em;
      &:active, &:focus {
        outline: none;
      }
    }

    textarea {
      resize: none !important;
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-weight: 200;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        font-weight: 200;
      }
      :-ms-input-placeholder { /* IE 10+ */
        font-weight: 200;
      }
      :-moz-placeholder { /* Firefox 18- */
        font-weight: 200;
      }
    }

    input:focus { 
      outline: none !important;
      border-color: none;
      box-shadow: none;
    }

    textarea:focus { 
      outline: none !important;
      border-color: none;
      box-shadow: none;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section {
      display: block;
    }

    button {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }

    a, a:hover, a:active, a:visited {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }

    a, button {
      cursor: pointer;
      border: none;
      outline: none;
    }

    img {
      height: auto;
      display: block;
    }

    div:focus {
      outline: none !important;
    }

    p { font-size: 1em; }
    h1 { font-size: 3em; }
    h2 { font-size: 2.25em; }
    h3 { font-size: 1.75em; }
    h4 { font-size: 1.25em;}
    h5 { font-size: 1em; }
    h6 { font-size: 0.75em; }
`;
