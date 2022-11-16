import { useState } from "react";
import { links } from "./Links";
import NavLinks from "./NavLinks";
import {
  Bar,
  EventTitle,
  NavbarWrapper,
  NavContainer,
  NavItem,
  NavTitle,
  NavToggle,
} from "./Styles";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
          <div>
            <NavTitle>New</NavTitle>
            <EventTitle>Event</EventTitle>
          </div>
          <NavItem className={`nav-items ${isOpen && "open"}`}>
            <div>
              {links.map((link, index) => {
                return (
                  <NavLinks
                    navLink={link.navLink}
                    navText={link.navText}
                    key={index}
                  />
                );
              })}
            </div>
          </NavItem>

          <NavToggle
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bar></Bar>
          </NavToggle>
        </NavContainer>
      </div>
    </NavbarWrapper>
  );
}
