import styled from 'styled-components'

export const PageTeacherList = styled.div`
	width: 100vw;
	height: 100vh;

	max-width: 100%;
	@media (min-width: 700px) {
	}
`

export const Form = styled.form`
	margin-top: 3.2rem;

	label {
		color: var(--color-text-in-primary);
	}

	button {
		width: 100%;
		height: 5.6rem;
		background: var(--color-secundary);
		color: var(--color-button-text);
		border: 0;
		border-radius: 0.8rem;
		cursor: pointer;
		font: 700 1.6rem Archivo;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: background-color 0.2s;
		margin-top: 3.2rem;
	}

	button:hover {
		background: var(--color-secundary-dark);
	}

	@media (min-width: 700px) {
		display: grid;
		grid-template-columns: 1.33fr 1.33fr 1.33fr 0.5fr;
		column-gap: 16px;
		position: absolute;
		bottom: -28px;

		button {
		}
	}
`

export const Main = styled.main`
	@media (min-width: 700px) {
		padding: 3.2rem 0;
		max-width: 740px;
		margin: 0 auto;
	}
`
