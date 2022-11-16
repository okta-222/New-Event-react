import { NavLink } from "react-router-dom";

type NavLinksProps = {
  navLink: string;
  navText: string;
};
export default function NavLinks({ navLink, navText }: NavLinksProps) {
  return (
      <NavLink to={navLink}>{navText}</NavLink>
  );
}
