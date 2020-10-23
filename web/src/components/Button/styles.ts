import styled from 'styled-components'

export const ButtonComponent = styled.button`
	padding: 1rem 2rem;
	border: 0;
	border-radius: 1rem;
	background-color: var(--color-secundary);
	color: #fff;
	transition: 0.3s ease;
	cursor: pointer;

	:hover {
		background-color: var(--color-secundary-dark);
	}
`
