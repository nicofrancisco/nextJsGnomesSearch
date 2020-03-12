import styled from "styled-components";

const LoadingStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  div.label{
    font-size: 2.3rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 400px) {
    & > div.label {
      h1 {
        font-size: 1.5rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export default LoadingStyled;
