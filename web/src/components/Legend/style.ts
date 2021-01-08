import styled from 'styled-components'

export const Legend = styled.legend`
	font: 700 2.5rem Archivo;
	color: var(--color-text-title);
	margin-bottom: 2.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 1.6rem;
	border-bottom: 1px solid var(--color-line-in-white);

	button {
		background: none;
		border: 0;
		color: var(--color-primary);
		font: 700 1.6rem Archivo;
		cursor: pointer;
		transition: color 0.2s;
	}
`
