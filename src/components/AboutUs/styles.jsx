import styled from 'styled-components'
import '@gs'

export const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  border: none;
  text-align: left;

  gap: 4rem;
  width: 100%;
  height: 30.25rem;

  padding: 4rem 10rem;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-repeat: no-repeat;

  .texts {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: var(--white-color)
    }

    .description {
      width: 100%;

      font-size: 1.25rem;
      font-weight: normal;
      color: var(--white-color)
    }
  }

  .contact-area {
    display: flex;
    justify-content: center;
    flex-direction: row;

    width: 100%;
    height: auto;

    padding: 2rem;
    gap: 1.25rem;

    background-color: rgba(255,255,255,0.10);
    backdrop-filter: blur(0.5rem);

    border: 0.0313rem solid var(--white-color);
    border-radius: 1.25rem;

    cursor: pointer;

    .social-media {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      user-select: none;

      width: 100%;
      height: 4.375rem;

      padding: 1.25rem;
      gap: 1.25rem;

      text-decoration: none;

      border: 0.0313rem solid var(--white-color);
      border-radius: 0.625rem;

      transition: all 0.2s;

      &:hover {
        background-color: rgba(255,255,255,0.10);
        border: 0.0313rem solid var(--white-color);
      }
      .image {
        width: auto;
        height: 1.875rem;
      }

      .text {
        color: var(--white-color);
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 3rem;
    gap: 2rem;

    .contact-area {
      flex-direction: column;

      .social-media {
        gap: 0.625rem;
        width: 100%;
        padding: 0.875rem;

        .text {
          font-size: 0.875rem;
        }
      }
    }
  }

  @media (min-width: 2559px) {
    .contact-area {
      width: 60%;
    }
  }
`
