import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  padding: 5rem 10rem;

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 31.25rem;
    height: auto;

    gap: 1.875rem;
    padding: 2rem 2.5rem;

    background-color: var(--primary-color);
    border: 0.0313rem solid var(--stroke-color);
    border-radius: 0.625rem;

    .title {
      font-family: 'Helvetica', sans-serif;
      font-weight: 600;
      font-size: 1.875rem;
      color: var(--white-color);
    }

    .form-inputs {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      width: 100%;

      gap: 1.25rem;

      .input-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;

        .label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--white-color);
        }

        .input-box {
          height: auto;
          padding: 1rem 0.875rem;

          background-color: var(--white-color);
          color: var(--black-color);

          border: 0.0625rem solid var(--stroke-color);
          border-radius: 0.25rem;
          outline: none;

          transition: all 0.2s;

          &:focus {
            border: 0.0625rem solid var(--secondary-color);
          }

          &::placeholder {
            font-size: 0.875rem;
            color: var(--black-color);
            opacity: 0.3;
          }
        }
      }
    }

    .form-button {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      user-select: none;

      width: 100%;
      height: 3.5rem;

      background-color: var(--secondary-color);

      border: none;
      border-radius: 0.25rem;

      color: var(--white-color);
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 600;

      transition: all 0.4s;
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`
