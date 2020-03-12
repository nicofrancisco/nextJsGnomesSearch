import { injectGlobal } from "styled-components";

//testing injectGlobal

const mainColor = "#37c3db";
const buttonNav = "#87dee9";
const lightColor = "#fbffff";
const darkColor = "#889db1";
const darkGray = "#666";

injectGlobal`
*,
*::after,
*::before {
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
}
::selection {
  background: #a5c5dd;
  color: "#fbffff";
}
html, body {
  font-family: monospace;
  line-height: 1.15;
  background: "#fbffff";
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}

//remove ugly selected glow
body:not(.user-is-tabbing) button:focus,
body:not(.user-is-tabbing) input:focus,
body:not(.user-is-tabbing) select:focus,
body:not(.user-is-tabbing) textarea:focus {
  outline: none;
}

`;

const theme = () => ({
  mainColor,
  hoverColor: mainColor,
  hoverFontColor: lightColor,
  mainBG: "#fbffff",
  mainFontColor: darkColor,
  selectColorBG: mainColor,
  selectColorTXT: lightColor,
  secondaryFontColor: darkGray,
  logoTextColor: lightColor,
  cardBG: lightColor,
  suggestionsBG: lightColor,
  suggestionsTXT: darkColor,
  suggestionsHoverBG: mainColor,
  suggestionsHoverTXT: lightColor,
  darkColor,
  lightColor
});

export default theme;
