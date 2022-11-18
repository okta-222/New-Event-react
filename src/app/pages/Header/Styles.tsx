import styled from "@emotion/styled";
import header from "../../../shared/assets/intro-bg.jpg";
import theme from "../config";
export const HeaderWrapper = styled("section")`
  label: HeaderWrapper;
  background: url(${header}) fixed;
  padding: 1.5rem 0;
  color: #ffffff;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20% 0;
  text-align: center;
`;
export const H3 = styled("h3")`
  label: H3;
  color: ${theme.gray};
  font-size: 1.2rem;

`;
export const H1 = styled("h1")`
  label: H1;
  color: ${theme.white};
  font-size: 2.8rem;

`;
