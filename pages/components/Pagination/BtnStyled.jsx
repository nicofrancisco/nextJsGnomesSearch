import styled from "styled-components";

const PaginationBtn = styled.button`
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

export default PaginationBtn;
