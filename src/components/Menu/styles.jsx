import styled from 'styled-components'
import '@gs'

export const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 5.625rem;
  border-bottom: 1px solid var(--stroke-color);
  padding: 0px 10rem;
  position: relative;

  .logo {
    height: 4rem;
    width: 4rem;
    background-color: var(--secondary-color);
    justify-self: start;
  }

  .menuItems {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.75rem;
    
    font-size: 1rem;
    color: var(--black-color);
    font-weight: 500;
    text-align: center;

    .link {
      text-decoration: none;
      color: var(--black-color);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--primary-color);

    color: var(--white-color);
    text-align: center;
    font-size: 1rem;
    justify-self: end;

    transition: all 0.2s;
    cursor: pointer;

    text-decoration: none;

    &:hover {
      background-color: var(--primary-hover);
    }

    @media (max-width: 768px) {
      display: none !important;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.75rem;
  color: var(--black-color);

  @media (max-width: 768px) {
    display: flex;
    justify-self: end;
  }
`

export const MobileMenu = styled.div`
  position: absolute;
  top: 5.625rem;
  left: 0;
  width: 100%;
  border: solid 1px #e4e4e4;
  border-top: none !important;
  border-radius: 0rem 0rem 1rem 1rem;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-top: 1px solid var(--stroke-color);
  z-index: 1000;

  .link {
    text-decoration: none;
    font-size: 1.25rem;
    color: var(--black-color);
    border-bottom: 1px solid #e4e4e4;
    font-weight: 600;
    padding: 0.75rem 1rem;
    width: 100%;
    text-align: center;
    transition: all .2s;
    
    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: var(--secondary-color);
    }
  }
`
