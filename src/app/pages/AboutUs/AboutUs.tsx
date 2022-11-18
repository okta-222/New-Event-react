import img from "../../../shared/assets/over.jpg";
import { AboutUsWrapper, P, Span } from "./Styles";
export default function AboutUs() {
  return (
    <div className="container">
      <AboutUsWrapper>
        <div>
          <Span>
            New Event is a fully responsive one-page template for events,
            conferences or workshops.
          </Span>
          <P>
            This is a Bootstrap v3.3.6 layout that is responsive and mobile
            friendly. You may download and modify this template for your
            website. Please tell your friends about template's.
          </P>
          <P>
            Iquique facilities scelerisque venerates. Nam that is responsive and
            mobiles. Lorem ipsum dolor sit amen, consectetur Nipissing elite,
            sed diam Please tell your friends about template's.
          </P>
        </div>
        <div>
          <img width="100%" src={img} alt="img" />
        </div>
      </AboutUsWrapper>
    </div>
  );
}
