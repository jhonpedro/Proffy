import styled from 'styled-components'

export const PageMyClasses = styled.div`
	height: 100vh;
	width: 100vw;
`

export const ClassesContainer = styled.div`
	margin: 0 auto;
	width: 100%;
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
