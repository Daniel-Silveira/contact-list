import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Spin = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  min-width: ${({ size }: { size?: string }) => size || '16px'};
  min-height: ${({ size }: { size?: string }) => size || '16px'};
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
