import styled from "@emotion/styled";
import header from "../../../shared/assets/intro-bg.jpg";
import theme from "../config";
export const HeaderWrapper = styled("section")`
  label: HeaderWrapper;
  background: url(${header}) fixed;
  padding: 1.5rem 0;
  color: #ffffff;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20% 0;
  text-align: center;
`;
export const H3 = styled("h3")`
  label: H3;
  color: #e4e4e4;
  font-size: 1.7rem;
`;
export const H1 = styled("h1")`
  label: H1;
  color: ${theme.white};
  font-size: 2.8rem;
`;
export const LEARN = styled("button")`
  label: LEARN;
  color: ${theme.secondary};
  font-size: 1.4rem;
  background-color: ${theme.white};
  border: 1px solid ${theme.white};
  padding: 0.8rem 3rem;
  margin-right: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    color: ${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.primary};
  }
`;
export const REGISTER = styled("button")`
  label: REGISTER;
  color: ${theme.white};
  font-size: 1.4rem;
  background-color: ${theme.primary};
  border: 1px solid ${theme.primary};
  padding: 0.8rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    color: ${theme.secondary};
    background-color: ${theme.white};
    border: 1px solid ${theme.white};
  }
`;
