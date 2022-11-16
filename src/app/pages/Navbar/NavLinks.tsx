import { LinksWrapper } from "./Styles";
import { NavLink } from "react-router-dom";

export default function NavLinks(navLink :any,navText :string) {
  return (
    <LinksWrapper>
    <NavLink to={navLink}>{navText}</NavLink>
    </LinksWrapper>
  )}