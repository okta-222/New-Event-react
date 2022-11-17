import NavItems from "./NavItems";
import {
  EventTitle,
  ItemsWrapper,
  NavbarWrapper,
  NavContainer,
  NavTitle,
} from "./Styles";
export default function Nav() {
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
          <div>
            <NavTitle>New</NavTitle>
            <EventTitle>Event</EventTitle>
          </div>
          <ItemsWrapper>
            <NavItems />
          </ItemsWrapper>
        </NavContainer>
      </div>
    </NavbarWrapper>
  );
}
