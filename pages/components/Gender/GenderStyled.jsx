import styled from "styled-components";

const GenderCardStyle = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 15px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  div.banner {
    position: absolute;
    top: 0;
    width: 100%;

  }

  header.headerBox{
    margin: 10px 0px;
    position: relative;
    height: 30px;
    margin-top: 35px;
    padding: 0 10px;
    text-align: center;
    font-size: 0.8rem;

    h2 {
      margin: 0 0 10px;
    }
    & > div {
      font-size: 0.8rem;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 8px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 630px) {
    max-width: 570px;
    margin: auto;
  }
`;
export default GenderCardStyle;
