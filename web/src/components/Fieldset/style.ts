import styled from 'styled-components'

export const Fieldset = styled.fieldset`
	border: 0;
	padding: 0 2.4rem;

	+ fieldset {
		margin-top: 6.4rem;
	}

	@media (min-width: 1100px) {
		padding: 0 6.4rem;
	}
`
