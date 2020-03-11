import styled from "styled-components";

const Avatar = styled.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover
  box-sizing: border-box;
  margin: auto 0;
  padding: 5px;
  height: 100px;
  position: relative;
  margin-top: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;
export default Avatar;
