import styled from "styled-components";

const Suggestion = styled.li`
  background-color: ${props => (props.active ? `#83d6e6` : "transparent")};
  color: ${props =>
    props.active ? `#fff` : `${({ theme }) => theme.suggestionsTXT}`};
  cursor: pointer;
  padding: 10px 15px;
`;

export default Suggestion;
