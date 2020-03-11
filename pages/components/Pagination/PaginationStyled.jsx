import styled from "styled-components";

export const PaginationWrapper = styled.div`
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

export const PaginationBtn = styled.button`
  background: ${({ disableStyle }) => (disableStyle ? "none" : "#80cf86")}
  color: ${({ disableStyle }) => (disableStyle ? "transparent" : "#fff")};
  cursor: ${({ disableStyle }) => (disableStyle ? "context-menu" : "pointer")};
  font-size: 0.9rem;
  width: 80%;
  max-width: 140px;
  padding: 6px 0;
  text-align: center;

  &:hover {
    background: ${({ disableStyle }) =>
      disableStyle ? "transparent" : "##e74142"}
  }
  &:focus {
    outline:none;
  }
`;
