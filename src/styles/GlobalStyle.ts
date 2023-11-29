import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}

:root {
    font-size: 62.5%;
}
body {
    font-family: 'Roboto', sans-serif;
    background: ${({theme})=> theme.BLUE_500};
    color: ${({theme})=> theme.WHITE};
}
body, textarea, button, input {
    font-size: 1.6rem;

}

button {
    cursor: pointer;
    
   
}

a{
    text-decoration: none;
    color: green;
  
}

ul {
    list-style: none;
}




`