import styled, { css } from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: #082032;
  padding: 0px 16px;
  box-sizing: border-box;
  color: #ff0075;
  :focus {
    border: 1px solid #ff0075;
  }
  ${({ margin }: { margin?: string }) =>
    margin &&
    css`
      ${margin}
    `}
`;
