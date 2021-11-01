import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
padding:0;
margin:0;
box-sizing:border-box;
}

html{
  scroll-behavior: smooth;
}


body{
width:100%;
font-family: poppins,sans-serif;

overflow-x: hidden;
--padding:clamp(1.5rem, 5vw, 4rem);
}


ul{
    list-style-type: none;
}

a{
    text-decoration: none;
    color:inherit;
}

input{
    border: 0;
      &:focus {
        outline: 0;
      }
}

button{
    border: 0;
      cursor: pointer;
      &:focus {
        outline: 0;
      }
}


`

export default GlobalStyle
