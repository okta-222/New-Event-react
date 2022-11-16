import styled from "@emotion/styled";

export const NavbarWrapper = styled("div")`
  label: NavbarWrapper;
  background: #ffffff;
  position: relative;
  padding: 1.5rem 0;
`;

export const NavContainer = styled("div")`
  label: NavContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled("span")`
  label: NavTitle;
  font-weight: 700;
  font-size: 21px;
  cursor: pointer;
  padding: 3px;
`;
export const EventTitle = styled("span")`
  label: EventTitle;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
  cursor: pointer;
`;

export const Title = styled("h2")`
  label: Title;
  color: black;
  font-size: 32px;
`;

export const Span = styled("span")`
  label: Span;
  color: #f2545f;
  font-size: 32px;
`;

export const LinkNav = styled("a")`
  label: LinkNav;
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 1rem;
  &:hover {
    opacity: 1;
    color: #66c6f6;
    transition: all 0.45s;
    cursor: pointer;
    &::before {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    &::before {
      background: transparent;
    }
  }
`;

export const NavToggle = styled("div")`
  label: NavToggle;
  display: none;
  @media (max-width: 700px) {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &.open {
    > .Bar {
      transform: translateX(-40px);
      background: transparent;
      &::before {
        width: 32px;
        transform: rotate(45deg) translate(26px, -26px);
      }
      &::after {
        transform: rotate(-45deg) translate(26px, 26px);
      }
    }
  }
`;

export const NavItem = styled("div")`
  label: NavItem;
  @media (max-width: 700px) {
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    left: 0;
    width: 100%;
    height: 90%;
    transform: translateX(-100%);
    transition: all 0.45s;
    z-index: 999;
    text-align: center;
    > &.open {
      transform: translateX(0);
    }
  }
`;

export const Bar = styled("div")`
  label: Bar;
  @media (max-width: 700px) {
    position: absolute;
    position: relative;
    width: 32px;
    height: 2px;
    background: #000000;
    transition: all 0.45s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      background: #000000;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      background: #000000;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
      width: 32px;
      transform: translateY(8px);
    }
  }
`;
export const LinksWrapper = styled("div")`
  label: LinksWrapper;
  color: black;
`;
