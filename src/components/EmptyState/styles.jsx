import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width || '60%'};
  height: auto;

  padding: 2rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.30);
  border-radius: 1.25rem;

  background-color: ${({ $bgColor }) => $bgColor || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(0.8rem);

  text-align: center;
  color: var(--white-color);
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 768px){
    width: 100%;
  }
`
