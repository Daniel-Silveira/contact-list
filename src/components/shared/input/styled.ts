import styled, { css } from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.background};
  padding: 0px 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryColor};
  :focus {
    border: 1px solid ${({ theme }) => theme.primaryColor};
  }
  ${({ marginConfig }: { marginConfig?: string }) =>
    marginConfig &&
    css`
      ${marginConfig}
    `}
`;
