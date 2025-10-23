import { HeaderBlock, HeaderContainer, HeaderNavLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderNavLink to="/">ToDo</HeaderNavLink>
        <HeaderNavLink to="/list">List</HeaderNavLink>
      </HeaderContainer>
    </HeaderBlock>
  );
};
