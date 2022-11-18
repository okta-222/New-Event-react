import styled from "@emotion/styled";
import theme from "../config";

export const NavbarWrapper = styled("div")`
  label: NavbarWrapper;
  background: ${theme.secondary};
  position: relative;
  padding: 1.5rem 0;
  color: ${theme.white};
  position: fixed;
  width: 100%;
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
  color: #ffffff;
  cursor: pointer;
  color: #f2545f;
`;

export const Title = styled("h2")`
  label: Title;
  color: #ffffff;
  font-size: 32px;
`;

export const Span = styled("span")`
  label: Span;
  color: #f2545f;
  font-size: 32px;
`;

export const LinksWrapper = styled("div")`
  label: LinksWrapper;
`;
export const ItemsWrapper = styled("div")`
  label: ItemsWrapper;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
