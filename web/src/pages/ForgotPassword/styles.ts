import styled from 'styled-components'

export const ForgotPasswordContainer = styled.div`
	height: 100vh;
	width: 100vw;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'forgotPasswordBox';

	@media (min-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'logo forgotPasswordBox';
	}
`

export const ForgotPasswordBox = styled.main`
	grid-area: forgotPasswordBox;

	width: 36rem;
	margin: 0 auto;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		position: absolute;
		top: 10px;
		align-self: flex-start;
		cursor: pointer;
		@media (max-height: 500px) {
			left: -55px;
		}
	}

	strong {
		margin-right: auto;
		margin-bottom: 1.5rem;
		font-size: 3.6rem;
		color: var(--color-text-title);

		@media (max-width: 700px) {
			:after {
				content: ' no Proffy';
			}
		}
	}

	p {
		margin-right: auto;
		width: 60%;
	}

	.active {
		button {
			color: white;
			background-color: var(--color-secundary);

			:hover {
				background-color: var(--color-secundary-dark);
				cursor: pointer;
			}
		}
	}

	form {
		width: 100%;
		margin-top: 4rem;

		div input {
			border-bottom: 0;
			border-radius: 0;
		}

		div:nth-child(1) input {
			border-top-right-radius: 1rem;
			border-top-left-radius: 1rem;
		}

		div:nth-last-child(2) input {
			border-bottom-right-radius: 1rem;
			border-bottom-left-radius: 1rem;
		}

		button {
			margin-top: 4rem;
			width: 100%;
			color: var(--color-text-complement);
			background-color: #dcdce5;
			cursor: no-drop;

			:hover {
				background-color: #dcdce5;
			}
		}
	}
`
