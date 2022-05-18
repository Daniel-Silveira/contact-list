import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 1em;
  background: rgba(0, 0, 0, 0.87);
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  min-width: ${({ width }: { width: string }) => width || "30%"};
  box-shadow: 0px 5px 10px rgba(29, 31, 41, 0.15);

  &:hover {
    background-color: #000;
  }
`;
