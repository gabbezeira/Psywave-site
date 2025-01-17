import styled from 'styled-components'
import '@gs'

export const StyledForm = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  width: 100%;
  height: auto;

  padding: 8rem 10rem;
  background-color: var(--white-color);

  .Form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 1.5625rem;
    border-radius: 1.25rem;

    background-color: #FEFEFE;
    padding: 2rem;

    width: 31.25rem;
    height: auto;

    .topInputs {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      gap: 1.25rem;
      width: 100%;
    }

    .text-area {
      width: 100%;
      height: 8.375rem;
      background-color: #FFFFFF;
      border: 0.0313rem solid #DBDCDD;
      border-radius: 0.5rem;
      resize: none;
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

`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: var(--black);
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
  text-align: left;
`

export const StyledLabel = styled.label`
	font-size: 0.875rem;
	color: #A8A8B3;
	font-weight: 500;
`

export const StyledInput = styled.input`
	width: 100%;
	height: 3.75rem;
	padding: 0.75rem 2.5rem 0.75rem 1rem;

	font-size: 1rem;
	color: var(--black-color);
	background: #FFFFFF;

	border: 0.0313rem solid #DBDCDD;
	border-radius: 0.5rem;
	outline: none;

	transition: all 0.2s;

	&::placeholder {
		color: #E1E1E6;
	}
`
