import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
padding:0;
margin:0;
box-sizing:border-box;
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

`

export default GlobalStyle
