import styled from "styled-components";

interface HeaderProps {
  name: string;
}

const StyledHeader = styled.div`
  width: 100%;
  background-color: gray;
`;

export default function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <div>
        <span>{props.name}</span>
      </div>
    </StyledHeader>
  );
}
