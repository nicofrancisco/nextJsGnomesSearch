import styled from "styled-components";

const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 40px;
  max-width: 820px;
  width: 90%;

  & .current-page {
    font-size: 0.95rem;
    font-weight: bold;
    text-align: center;
    color: #80cf86;
  }
`;

export default PaginationWrapper;
