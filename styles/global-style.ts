import { createGlobalStyle } from "styled-components";
import { Colors } from "../src/utils/colors";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Kantar Brown", ui-sans-serif, system-ui, BlinkMacSystemFont,
  Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
  Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  
  background-color: ${Colors.WHITE};
}

#__next{
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  max-width: 100%;
  height: auto;
  border: none;
}

* {
  box-sizing: border-box; 
  
}
`;
