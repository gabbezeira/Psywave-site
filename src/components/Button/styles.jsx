import styled from 'styled-components'
import '@gs'

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ $padding }) => $padding || '0.875rem 2rem'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  background-color: var(--primary-color);

  color: var(--white-color);
  text-align: center;
  font-size: 1rem;

  width: ${({ $width }) => $width || 'auto'};

  border: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-hover);
  }
`
