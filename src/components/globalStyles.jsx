import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    position: relative;
}
body{

    padding: 0;
    margin: 0;

    width: 100%;
    height: 100svh;
    display: grid;
    place-content: center;

    background-image: linear-gradient( 90deg,  #28ec96, #0bb6e0);

    font-family: sans-serif;

}

`;
