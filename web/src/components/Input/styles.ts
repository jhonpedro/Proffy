import styled, { css } from 'styled-components'

interface WrapperProps {
	isUp?: boolean
}

export const InputBlock = styled.div`
	position: relative;
	overflow: hidden;

	:focus-within::after {
		height: calc(100% - 2rem);
		width: 3px;
		content: '';
		background: var(--color-primary-light);
		position: absolute;
		left: -1px;
		top: 1rem;
		bottom: 1rem;
		border-radius: 1rem;
	}

	:focus-within label {
		font-size: 1rem;
		top: 0.6rem;
	}
`

export const Label = styled.label<WrapperProps>`
	position: absolute;
	left: 1.6rem;

	transition: 0.5s ease;
	${(props) => {
		if (props.isUp) {
			return css`
				top: 0.6rem;
				font-size: 1rem;
			`
		} else {
			return css`
				top: 1.6rem;
			`
		}
	}}
`

export const InputElement = styled.input`
	width: 100%;
	height: 5.6rem;
	border-radius: 0.8rem;
	background: var(--color-input-background);
	border: 1px solid var(--color-line-in-white);
	outline: 0;
	padding: 0 1.6rem;
	font: 1.6rem Archivo;
`
