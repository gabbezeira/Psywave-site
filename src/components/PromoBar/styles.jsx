import styled from 'styled-components'
import '@gs'

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  border-bottom: 1px solid var(--stroke-color);

  padding: 0.5rem 5rem;
  background-color: var(--secondary-color);

  .promoText { 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    color: var(--white-color);
    font-size: 0.75rem;
  }

  .button {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: var(--primary-color);
    border-radius: 0.25rem;
    
    padding: 0.25rem 1rem;
    text-decoration: none;

    color: var(--white-color);
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;

    .promoText {
      font-size: 0.625rem;
    }

    .button {
      font-size: 0.625rem;
      padding: 0.5rem;
      white-space: nowrap;
    }
  }
`
