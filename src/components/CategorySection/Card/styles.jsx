import styled from 'styled-components'
import '@gs'

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(0.5rem);

  width: 15.5625rem;
  height: 18.5rem;

  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 1.25rem;

  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  .description {
    font-size: 0.75rem;
    color: var(--white-color);
  }

  .platforms {
    width: 100%;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--white-color);
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .priceLabel {
    font-size: 0.75rem;
    font-weight: normal;
    color: var(--white-color);
  }

  .price {
    width: auto;
    height: auto;

    padding: 0.3125rem 0.625rem;
    border-radius: 0.375rem;

    border: 1px solid var(--white-color);

    color: var(--white-color);
    background-color: transparent;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--white-color);
      color: var(--black);
    }
  }
`
