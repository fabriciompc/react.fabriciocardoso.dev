import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  background-color: gray;
`;

export default function Header() {
  return (
    <StyledHeader>
      <span>fabriciocardoso.dev</span>
    </StyledHeader>
  );
}
