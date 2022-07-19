import styled, { createGlobalStyle } from "styled-components";
// import BACKGROUND from "../assests/images/backgroud_pattern.svg";
// import '../assests/fonts/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf'

export const GlobalStyle = createGlobalStyle`
    
    html {
        box-sizing: border-box;
        font-size: 62.75%;
    }

    *,*::before, *::after  {
       margin : 0;
       padding: 0;
    }


    body{
        width: 100%;
       font-family: "Inter", sans-serif;
       font-family: 'Roboto', sans-serif;
/* font-family: 'Roboto Mono', monospace; */
       min-height: 100vh;
       /* min-height: 100vh; */
       /* font-family: 'Monument Extended', sans-serif; */
       /* font-style: normal; */
        /* height: 100%; */
        /* background-color: #7EA1C4;
        background-color: #1B365C;
        background-color: #022840;
        background-color: #212529;
        background-color: #0A192F; */
        
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        color: #000;
        background-color: #FFFFFF;
        /* position: relative; */
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6 {
margin: 0;
padding: 0;
}

a {
    color: inherit;
    text-decoration:  none;
    cursor: pointer;
}

li {
    list-style: none;
}
`;

export const Body = styled.body``;
