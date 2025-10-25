import { useDispatch } from "react-redux";
import {
  HeaderBlock,
  HeaderContainer,
  HeaderNavLink,
  HeaderToggleBlock,
  HeaderToggleButton,
} from "./Header.styled";
import { toggleThemeAction } from "../../feature/themeList";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderNavLink to="/">ToDo</HeaderNavLink>
        <HeaderNavLink to="/list">List</HeaderNavLink>

        <HeaderToggleBlock className="toggleButton">
          <HeaderToggleButton onClick={() => dispatch(toggleThemeAction())}>
            toggle
          </HeaderToggleButton>
        </HeaderToggleBlock>
      </HeaderContainer>
    </HeaderBlock>
  );
};
