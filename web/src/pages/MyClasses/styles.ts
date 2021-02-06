import styled from 'styled-components'
import { TeacherItemContainer } from '../../components/TeacherItem/styles'

export const PageMyClasses = styled.div`
	height: 100vh;
	width: 100vw;
`

export const ClassesContainer = styled.div`
	margin: 0 auto;
	width: 100%;

	${TeacherItemContainer} + ${TeacherItemContainer} {
		margin-top: 2rem;
	}
`

export const ClassesContent = styled.main`
	/* border: 1px solid red; */
	width: 100%;
	margin: -1rem auto 0;

	@media (min-width: 700px) {
		margin-top: -5rem;
		padding: 0 2rem;
		width: 80%;
	}
	@media (min-width: 900px) {
		width: 60%;
	}
`

export const AddClassContainer = styled.footer`
	padding: 3rem 0;
	width: 100%;
	display: flex;
	justify-content: center;

	strong {
		cursor: pointer;
		font-weight: 700;
		color: var(--color-primary);
		transition: 0.5s ease-in-out;

		:hover {
			letter-spacing: 0.2rem;
		}
	}
`
