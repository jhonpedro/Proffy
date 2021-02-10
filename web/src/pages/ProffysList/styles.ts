import styled from 'styled-components'
import { TeacherItemContainer } from '../../components/TeacherItem/styles'
import { SelectBlock } from '../../components/Select/styles'
import { SimpleInputContainer } from '../../components/SimpleInput/styles'

export const PageTeacherList = styled.div`
	width: 100vw;
	height: 100vh;

	max-width: 100%;
	@media (min-width: 700px) {
	}

	${TeacherItemContainer} + ${TeacherItemContainer} {
		margin-top: 2rem;
	}
`

export const Form = styled.form`
	margin-top: 3.2rem;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	${SelectBlock} {
		width: 100%;
	}
	${SimpleInputContainer} {
		margin: 0;
	}

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
		font-weight: 700;
		font-size: 1.6rem;
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
		width: 100%;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;

		${SelectBlock} {
			width: 20%;
		}

		${SimpleInputContainer} {
			width: 20%;
		}

		> button {
			width: 20%;
		}
	}
`

export const Main = styled.main`
	@media (min-width: 700px) {
		padding: 3.2rem 0;
		max-width: 74rem;
		margin: -5rem auto 0;
	}
`
