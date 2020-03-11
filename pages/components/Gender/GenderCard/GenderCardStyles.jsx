import styled from "styled-components";

// themes value received thenaks to themesProvider
// so themes variables are available in all styled components
const GenderResult = styled.header`
  align-items: center;
  background: #fff;
  /*box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);*/
  display: flex;
  height: 150px;
  justify-content: center;

  h1 {
      color: #327c7c;
      text-decoration: none;
      letter-spacing: 1px;
      font-size: 1.5em;
  }
  h3 {

      color: #327c7c;
      text-decoration: none;
      font-size: 1.4em;
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    max-width: 300px;
    width: 100%;
  }

  div.column {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5px;
    max-width: 450px;
    width: 100%;
    margin: auto;
  }
`;

export default GenderResult;
