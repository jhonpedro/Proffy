import styled from 'styled-components'

import backgroundSingInImage from '../../assets/images/background-singin.svg'

export const LogoArea = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	grid-area: logo;
	background: url(${backgroundSingInImage}), var(--color-primary);
	background-repeat: no-repeat;
	background-position: center;

	img,
	p {
		width: 50%;
	}

	p {
		color: var(--color-text-complement);
		font-size: 2rem;
		padding-right: 4rem;
	}

	@media (min-width: 700px) {
		display: flex;
	}
`
