import styled from 'styled-components'

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.description}70;
  }
`
