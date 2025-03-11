import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: start;

  background-color: ${({ $cardBackground }) => $cardBackground || 'rgba(255, 255, 255, 0.10)'};
  backdrop-filter: blur(0.8rem);

  width: auto;
  min-height: 18.5rem;

  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 1.25rem;

  .footer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.5rem;

    height: 100%;
    width: 100%;

    .title {
      font-size: 0.75rem;
      color: var(--white-color);
    }

    .platforms {
      width: 100%;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--white-color);
    }
  }

  .priceContainer {
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
  }


  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`
export const CardImage = styled.div`
  width: 100%;
  height: 8.25rem;
  max-height: 8.25rem;
  user-select: none;
  pointer-events: none;

  background-image: ${({ $cardImage }) => `url(${$cardImage})`};
  background-size: cover;
  background-position: start;
`
