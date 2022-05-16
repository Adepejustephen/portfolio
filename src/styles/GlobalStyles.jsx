import { createGlobalStyle } from 'styled-components'
// itmport background from "../images/endless-constellation.svg";
// import '../assests/fonts/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf'


export const GlobalStyle = createGlobalStyle`
    
    html {
        box-sizing: border-box;
    }

    *,*::before, *::after  {
       margin : 0;
       padding: 0;
    }


    body{
        width: 100%;
       font-family: "Inter", sans-serif;
       /* min-height: 100vh; */
       /* font-family: 'Monument Extended', sans-serif; */
       /* font-style: normal; */
        /* height: 100%; */
        /* background-color: #7EA1C4;
        background-color: #1B365C;
        background-color: #022840;
        background-color: #212529;
        background-color: #0A192F; */
        color: #fff;
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