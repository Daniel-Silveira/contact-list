import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 1em;
  box-sizing: border-box;
  height: 90vh;
  width: 75%;
  margin-top: 5vh;
  overflow-y: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-bottom: 2em;
  border-bottom: 1px solid ${({ theme }) => theme.description}50;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1.4em;
  color: ${({ theme }) => theme.title};
  margin-right: 0.5em;
`
