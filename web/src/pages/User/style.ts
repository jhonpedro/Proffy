import styled from 'styled-components'
import backgroundUser from '../../assets/images/background-user.svg'

export const PageUser = styled.div`
	width: 100%;
	height: 100%;
`

export const UserContainer = styled.div`
	width: 100%;
	background: url(${backgroundUser});
	background-repeat: no-repeat;
	background-position: center;
	object-fit: contain;
`

export const UserIndividual = styled.div`
	text-align: center;
	margin: 0 auto;
	max-width: 180px;

	.photo {
		display: fkex;
		align-items: center;
		justify-content: center;
		position: relative;

		img {
			border-radius: 50%;
		}
	}

	strong {
		font-size: 2.5rem;
	}

	.user-cam {
		position: absolute;
		bottom: 0;
		right: 2rem;
	}

	@media (min-width: 1100px) {
		margin-top: 2rem;
	}
`
