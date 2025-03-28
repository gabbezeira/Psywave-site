import styled from 'styled-components'
import '@gs'

export const Container = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: auto;
  width: 18.125rem;

  padding: 1.125rem 0.875rem;
  gap: 1rem;

  background-color: var(--white-color);

  border: 0.0313rem solid var(--stroke-color);
  border-radius: 0.5rem;
  transition: all 0.2s;

  margin: 0;

  .cardImageLink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;

    .cardImage {
      height: 11.8125rem;
      width: 18.0625rem;

      background-size: cover;
      background-position: center;

      border-radius: 0.5rem;
    }
  }

  .cardDetails {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: auto;

    gap: 1rem;

    .cardHeader {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .cardTitleLink {
        display: flex;
        align-items: center;
        height: auto;
        margin: 0;

        .cardTitle {
          color: var(--black-color);
          font-size: 0.875rem;
          font-weight: 600;

          max-height: 5rem;
          width: 100%;
          overflow: hidden;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          line-height: 1.5rem;
        }
      }
    }

    .cardPlatform {
      color: var(--primary-color);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .cardFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: auto;
      width: 100%;

      background-color: transparent;
      border-radius: 0rem 0rem 0.5rem 0.5rem;

      .cardPainelOptions {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 0.5rem;

        .cardPainelButton {
          display: flex;
          justify-content: center;
          align-items: center;

          height: auto;
          width: auto;

          margin: 0;

          padding: 5px;
          border-radius: 0.25rem;
          border: none;

          background-color: var(--secondary-color);
          color: var(--black-color);

          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            opacity: 0.8;
          }

          .icon {
            color: var(--black-color);
            width: 1rem;
            height: auto;
          }
        }
      }

      .priceText {
        color: #bebebe;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .priceButton {
        height: auto;
        width: auto;

        padding: 0.3125rem 0.625rem;
        border-radius: 0.25rem;
        border: none;

        background-color: var(--secondary-color);
        color: var(--black-color);

        font-family: var(--poppins);
        font-size: 14px;
        font-weight: 700;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  &:hover {
    pointer-events: auto;
    transform: scale(1.04);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`
