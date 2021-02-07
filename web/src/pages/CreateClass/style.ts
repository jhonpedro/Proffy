import styled from 'styled-components'

import { InputBlock } from '../../components/Input/styles'
import { TextAreaContainer } from '../../components/TextArea/styles'
import { SelectBlock } from '../../components/Select/styles'
import { ButtonComponent } from '../../components/Button/styles'

export const PageTeacherForm = styled.div`
	height: 100%;
	width: 100vw;

	@media (min-width: 700px) {
		padding-bottom: 200px;
	}
`

export const MainPageTeacherForm = styled.main`
	width: 100%;
	background: var(--color-box-base);
	border-radius: 0.8rem;
	margin: -1.2rem auto 100px;

	form {
		padding: 2rem;

		${ButtonComponent} {
			font-size: 1.6rem;
			margin-top: 2rem;
			width: 100%;
		}
	}

	${InputBlock}, ${TextAreaContainer}, ${SelectBlock} {
		margin: 1rem 0;
	}

	@media (min-width: 700px) {
		width: 60%;
		margin: -5.5rem auto;
	}
`

export const ScheduleItem = styled.div`
	border-bottom: 1px solid var(--color-line-in-white);
	padding-bottom: 1rem;

	@media (min-width: 700px) {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		column-gap: 1.6rem;
	}
`

export const Footer = styled.footer`
	padding: 4rem 2.4rem;
	background: var(--color-box-footer);
	border-top: 1px solid var(--color-line-in-white);
	width: 100%;

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
