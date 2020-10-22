import styled from 'styled-components'

import backgroundSingInImage from '../../assets/images/background-singin.svg'

export const SingInContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'singInBox';
	@media (min-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'logo singInBox';
	}
`

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

export const SingInBox = styled.main`
	grid-area: singInBox;
	width: 36rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> strong {
		margin-right: auto;
		margin-bottom: 1.5rem;
		font-size: 2.6rem;
		color: var(--color-text-title);

		@media (max-width: 700px) {
			:after {
				content: ' no Proffy';
			}
		}
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;

		div input {
			border: 1px solid var(--color-line-in-white);
			padding: 1.5rem;
			border-top-left-radius: 0.7rem;
			border-top-right-radius: 0.7rem;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}

		div + div input {
			border-top: 0;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0.7rem;
			border-bottom-left-radius: 0.7rem;
		}

		.passwordAndRemember {
			display: flex;
			justify-content: space-between;
			margin: 2.5rem 0 3rem;

			label,
			a {
				display: flex;
				align-items: center;

				input {
					margin-right: 1rem;
				}
			}

			input:checked {
				background-color: green;
			}

			a {
				font-size: 1.2rem;
				text-decoration: none;
				color: var(--color-text-complement);
			}
		}

		button {
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
		}
	}

	footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 4rem;

		p {
			font-size: 1.2rem;

			a {
				font-weight: 800;
				color: var(--color-primary);
			}
		}
		small {
			color: var(--color-text-complement);
			font-size: 1rem;
		}
	}
`
