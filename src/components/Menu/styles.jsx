import styled from 'styled-components'
import '@gs'

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.625rem;
  border-bottom: 1px solid var(--stroke-color);

  padding: 0px 10rem;
`

export const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  background-color: var(--secondary-color);
`

export const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;

  font-size: 1rem;
  color: var(--black-color);
  font-weight: 500;
  
  a {
    text-decoration: none;
    color: var(--black-color);
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.875rem 2rem;
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  background-color: var(--primary-color);

  color: var(--white-color);
  text-align: center;
  font-size: 1rem;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-hover);
  }
`
