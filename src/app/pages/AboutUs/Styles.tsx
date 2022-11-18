import styled from "@emotion/styled";
import theme from "../config";
export const AboutUsWrapper = styled("section")`
  label: AboutUsWrapper;
  padding: 3rem 0;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;
export const Span = styled("span")`
  label: Span;
  font-size: 1.9rem;
  color: ${theme.secondary};
  line-height: 1.5rem;
`;
export const P = styled("p")`
  label: P;
  font-size: 1.2rem;
  padding-top: 1rem;
  color: ${theme.gray};
  line-height: 1.5rem;
`;
