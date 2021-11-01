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

--padding:2rem;
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
