import styled from 'styled-components'

export const Legend = styled.legend`
	font-weight: 700;
	font-size: 2.5rem;
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
		font-weight: 700;
		cursor: pointer;
		transition: color 0.2s;
	}
`
