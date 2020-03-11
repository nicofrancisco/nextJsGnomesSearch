import styled from "styled-components";

const Details = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.5s;
  width: 100%;

  div.banner {
    background: ${props => props.hairColor};
    height: 130px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  header.description {
    margin: 10px 0 20px;
    padding: 0 10px;
    text-align: center;

    h2 {
      font-size: 1.6rem;
      margin: 0 0 10px;
    }
    & > div {
      font-size: 1rem;
      margin: 0 0 20px;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 15px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 400px) {
    header.description {
      h2 {
        font-size: 1.7rem;
      }
      & > div {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Details;
