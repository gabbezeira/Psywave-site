import styled from 'styled-components'
import '@gs'

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  width: 100%;
  height: 2.625rem;
  background-color: var(--secondary-color);

  color: var(--white-color);
  text-align: center;
  font-size: 0.875rem;

  a {
    color: var(--white-color);
    font-weight: 600;
    text-decoration: underline;
  }
`
