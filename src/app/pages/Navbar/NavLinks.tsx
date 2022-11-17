import { NavLink } from "react-router-dom";

type NavLinksProps = {
  navLink: string;
  navText: string;
  color: string;
};
export default function NavLinks({ navLink, navText, color }: NavLinksProps) {
  return (
    <NavLink style={{ color: color }} to={navLink}>
      {navText}
    </NavLink>
  );
}
