import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-top: 5rem;
  padding: 2rem;
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

  .title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: var(--black-color);
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    .input-section {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 1rem;

      .input-area {
        flex: 1;
        display: flex;
        flex-direction: column;

        .label {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--black-color);
          display: block;
        }

        .input-box {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--stroke-color);
          border-radius: 0.25rem;
          box-sizing: border-box;
          font-size: 0.875rem;
          transition: border-color 0.3s ease;

          &:focus {
            border-color: var(--secondary-color);
            outline: none;
          }
        }

        .text-area-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: end;

          .text-area {
            width: 100%;
            min-height: 10rem;
            height: auto;
            padding: 0.75rem;
            border: 1px solid var(--stroke-color);
            border-radius: 0.25rem;
            box-sizing: border-box;
            font-size: 0.875rem;
            transition: border-color 0.3s ease;
            resize: none;

            &:focus {
              border-color: var(--secondary-color);
              outline: none;
            }
          }

          .emoji-button {
            display: flex;
            align-items: center;

            background-color: white;

            width: max-content;
            text-align: center;

            gap: 0.5rem;
            height: auto;
            padding: 0.2rem 0.4rem;

            border-radius: 0.25rem;
            border: none;

            color: var(--black-color);
            font-size: 1.5rem;
            font-weight: 600;
            text-transform: capitalize;
            text-decoration: none;
            transition: all 0.2s;
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }
          }

          .emoji-picker {
            width: 95% !important;
          }
        }

        .dropzone {
          width: 100%;
          padding: 1.25rem;
          border: 2px dashed var(--secondary-color);
          border-radius: 0.25rem;
          background-color: var(--background-color);
          text-align: center;
          cursor: pointer;
          color: var(--secondary-color);
          font-size: 0.875rem;
          transition: border-color 0.3s ease;

          p {
            margin: 0;
          }
        }
      }

      .input-area-button {
        display: flex;
        justify-content: end;
        width: 100%;

        .button {
          display: flex;
          align-items: center;
          width: auto;
          height: 2.5rem;

          gap: 0.5rem;

          padding: 0.5rem;
          border-radius: 0.25rem;
          border: none;
          background-color: var(--secondary-color);

          color: var(--black-color);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: capitalize;
          text-decoration: none;
          transition: all 0.2s;

          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          .cancel {
            background-color: var(--gray-color) !important;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    width: 100%;

    .form {
      .input-section {
        flex-direction: column;

        .text-area-wrapper {
          flex-direction: column !important;

          .emoji-picker {
            width: 100% !important;
          }
        }
      }
    }
  }
`
