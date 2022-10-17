import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width:1080px){
    html {
        font-size: 93.75%;
    }
  }

  @media (max-width:720px){
    html {
        font-size: 87.5%;
    }
  }

  body {
    background-color: #fff;
    
  }

  body,input,textarea,select,button,a,span,ul,li{
    font: 400 1rem Verdana,sans-serif;
    font: 400 1rem "Roboto",Verdana, sans-serif;

  }

  h1,h2,h3,h4{
    font-family: "Roboto",Verdana, sans-serif;
  }


  button {
    outline:none;
    cursor: pointer;
  }

  select {
    box-shadow: none;
    background: #fff;
    background-image: none;

    &::-ms-expand {
      display: none;
    }
  }


  a {
    color: inherit;
    text-decoration: none;
  }


`;