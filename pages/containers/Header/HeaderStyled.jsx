import styled from "styled-components";

// themes value received thenaks to themesProvider
// so themes variables are available in all styled components
const HeaderComponent = styled.header`
  align-items: center;
  background: #146e7d;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  display: flex;
  height: 65px;
  justify-content: center;

  h1 {

      color: #eceeee;
      text-decoration: none;
      letter-spacing: 6px;
      font-size: 1.7em;
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    max-width: 900px;
    width: 100%;
  }
`;

export default HeaderComponent;
