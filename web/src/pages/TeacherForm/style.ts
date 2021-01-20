import styled from 'styled-components'

export const PageTeacherForm = styled.div`
	width: 100vw;
	height: 100vh;

	@media (min-width: 700px) {
		max-width: 100vw;
	}
`

export const MainPageTeacherForm = styled.main`
	background: var(--color-box-base);
	width: 100%;
	border-radius: 0.8rem;
	margin: -1.2rem auto;
	margin-bottom: 5rem;
	padding-top: 6.4rem;
	overflow: hidden;

	label {
		color: var(--color-text-complement);
	}

	@media (min-width: 700px) {
		max-width: 74rem;
		margin: -5.5rem auto;
	}
`

export const ScheduleItem = styled.div`
	@media (min-width: 1100) {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		column-gap: 1.6rem;
	}
`

export const Footer = styled.footer`
	padding: 4rem 2.4rem;
	background: var(--color-box-footer);
	border-top: 1px solid var(--color-line-in-white);
	margin-top: 6.4rem;

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: var(--color-text-complement);
	}

	img {
		margin-right: 2rem;
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
		padding: 4rem 6.4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		p {
			justify-content: space-between;
		}

		button {
			width: 20rem;
			margin-top: 0;
		}
	}
`
