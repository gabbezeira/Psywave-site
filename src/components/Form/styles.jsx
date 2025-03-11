import styled from 'styled-components'
import '@gs'

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  width: 100%;
  height: auto;

  padding: 8rem 10rem;
  background-color: var(--white-color);

  .formTitle {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
  }

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 1.5625rem;
    border-radius: 1.25rem;

    background-color: var(--white-color);
    border: solid 1px #e4e4e4;
    padding: 2rem;

    max-width: 31.25rem;
    height: auto;

    .topInputs {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      gap: 1.25rem;
      width: 100%;

      .inputWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        text-align: left;

        .label {
          font-size: 0.875rem;
          color: #A8A8B3;
          font-weight: 500;
        }

        .input { 	width: 100%;
          height: 3.75rem;
          padding: 0.75rem 2.5rem 0.75rem 1rem;

          font-size: 1rem;
          color: var(--black-color);
          background: #FFFFFF;

          border: 0.0313rem solid #e4e4e4;
          border-radius: 0.5rem;
          outline: none;

          transition: all 0.2s;

          &::placeholder {
            color: #E1E1E6;
          }
        }
      }
    }

    .text-area {
      width: 100%;
      height: 8.375rem;
      background-color: #FFFFFF;
      border: 0.0313rem solid #e4e4e4;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-family: sans-serif;
      color: var(--black-color);
      resize: none;
      padding: 0.625rem;

      outline: none;

      &::-webkit-input-placeholder{
        font-family: sans-serif;
        font-size: 1rem;
        color: #E1E1E6;
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

      width: 100%;
      height: 3.5rem;

      border: none;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background-color: var(--primary-hover);
      }
    }

    .whatsapp {
      color: #A8A8B3;
      font-size: 0.875rem;

      a {
        color: var(--secondary-color);
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;

    .form {
      width: 100%;

      .topInputs {
        flex-direction: column;
      }
    }
  }
`
