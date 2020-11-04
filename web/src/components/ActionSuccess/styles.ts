import styled, { keyframes } from 'styled-components'

import backgroundSuccess from '../../assets/images/background-success.svg'

export const ActionSuccessContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0;
	background-color: var(--color-primary);

	@media (min-width: 700px) {
		padding: 6rem;
	}
`

const popSuccesIcon = keyframes`
  from {
    height: 0;
  }

  to {
    height: 13rem;
  }
`

export const Content = styled.main`
	width: 100%;
	height: 100%;
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: url(${backgroundSuccess});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;

	img {
		height: 13rem;
		animation: ${popSuccesIcon} cubic-bezier(0.6, 2.07, 0.89, 1.16) 0.8s;
	}

	strong {
		margin-top: 2.5rem;
		font-size: 4rem;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 6rem;
		font-size: 1.5rem;
		text-align: center;
		max-width: 35rem;
	}
`
