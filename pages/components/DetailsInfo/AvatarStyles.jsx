import styled from "styled-components";

const Avatar = styled.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover;
  border: 4px solid ${({ theme }) => theme.cardBG};
  border-radius: 50%;
  box-sizing: border-box;
  margin: 65px auto 0;
  padding: 5px;
  height: 130px;
  position: relative;
  width: 130px;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }

  @media screen and (min-width: 400px) {
    height: 180px;
    margin: 40px auto 0;
    width: 180px;
  }
`;
export default Avatar;
