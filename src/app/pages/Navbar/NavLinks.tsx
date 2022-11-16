import { NavLink } from "react-router-dom";
import { LinksWrapper } from "./Styles";

type NavLinksProps = {
  navLink: string;
  navText: string;
};
export default function NavLinks({ navLink, navText }: NavLinksProps) {
  return (
    <LinksWrapper>
      <NavLink to={navLink}>{navText}</NavLink>
    </LinksWrapper>
  );
}
