import styled from "styled-components";

const DetailsWrapper = styled.main`
  border-radius: 5px;
  margin: 10px auto;
  max-width: 900px;
  max-heigth: 600px;
  padding: 0;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;
export default DetailsWrapper;
