import { createGlobalStyle } from 'styled-components'

//colors do Projeto

export const colors = {
  BlushPink: '#E66767',
  CreamyWhite: '#FFF8F2',
  PeachCream: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

// Reset CSS
export const GlobalCss = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  box-sizing:border-box;
  font-family: Roboto, sans-serif;
  list-style:none;
  text-decoration: none;
}

body{
  background-color:${colors.CreamyWhite};
  color:${colors.BlushPink};
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: ${breakpoints.desktop}){
    max-width: 90%;
  }
}

`
