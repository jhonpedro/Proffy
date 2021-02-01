import styled from 'styled-components'

export const SimpleInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 1rem 0;

	label {
		font-size: 1.4rem;
	}

	input {
		margin-top: 0.8rem;
		background: var(--color-input-background);
		border: 1px solid var(--color-line-in-white);
		border-radius: 0.8rem;
		height: 5.6rem;
		padding: 0.5rem 1.6rem 0;
	}
`
