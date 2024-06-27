import { createGlobalStyle } from 'styled-components'

//Cores do Projeto

export const cores = {
  larajaEscuro: '#E66767',
  corFundo: '#FFF8F2',
  textoBotao: '#FFEBD9'
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
}

body{
  background-color:${cores.corFundo};
  color:${cores.larajaEscuro};
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
