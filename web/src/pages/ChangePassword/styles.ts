import styled from 'styled-components'

export const ChangePasswordContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'ChangePasswordBox';
	@media (min-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'logo ChangePasswordBox';
	}
`
export const ChangePasswordBox = styled.main`
	grid-area: ChangePasswordBox;
	width: 36rem;
	margin: 0 auto;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> img {
		position: absolute;
		top: 10px;
		align-self: flex-start;
		cursor: pointer;
		@media (max-height: 500px) {
			left: -55px;
		}
	}

	> strong {
		margin-right: auto;
		margin-bottom: 1.5rem;
		font-size: 3.6rem;
		color: var(--color-text-title);

		:after {
			content: '!';
		}

		@media (max-width: 700px) {
			:after {
				content: ' do Proffy!';
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

		button {
			margin-top: 2.5rem;
		}
	}
`
