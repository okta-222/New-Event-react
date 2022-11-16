import { useState } from "react";
import { links } from "./Links";
import NavLinks from "./NavLinks";
import {
  EventTitle,
  ItemsWrapper,
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
          <ItemsWrapper>
            {links.map((link, index) => {
              return (
                <NavLinks
                  navLink={link.navLink}
                  navText={link.navText}
                  key={index}
                />
              );
            })}
          </ItemsWrapper>
          <NavToggle
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          ></NavToggle>
        </NavContainer>
      </div> 
    </NavbarWrapper>
  );
}
