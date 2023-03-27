import SVG from "react-inlinesvg";
import { StyledAppNavItem, StyledAppNavItemBody } from "./applayout.style";

type Props = {
  icon: string;
  title: string;
  counter: number;
  active?: boolean;
};

const NavItem = ({ icon, title, counter = 0, active }: Props) => {
  return (
    <StyledAppNavItem isActive={active}>
      <SVG src={icon} color="#1c1c1c" opacity={0.6} />
      <StyledAppNavItemBody>
        <h4>{title}</h4>
        <p>{counter ? counter : null}</p>
      </StyledAppNavItemBody>
    </StyledAppNavItem>
  );
};

export default NavItem;
