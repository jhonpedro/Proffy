import styled, { css } from 'styled-components'

interface MenuHamburguerProps {
	active: boolean
}

interface ButtonProps {
	study?: boolean
	give_classes?: boolean
}

export const PageLanding = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: var(--color-text-in-primary);
	background: var(--color-primary);
`

export const PageLandingContent = styled.div`
	.landing-img-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
		img {
			width: 90%;
		}
	}
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	@media (min-width: 700px) {
		display: grid;
		grid-template-rows: 10rem 3fr 2fr;
		grid-template-columns: 2fr 1fr 1fr;
		grid-template-areas:
			'user user user'
			'logo hero hero'
			'total buttons buttons';

		.landing-img-container {
			grid-area: hero;
			margin: 0;

			height: 100%;
			width: 100%;

			img {
				width: 80%;
			}
		}
	}
`

export const Header = styled.header`
	width: 100%;
	height: 10%;
	padding: 0 2rem;
	position: absolute;
	top: 0;
	margin-bottom: 10%;
	grid-area: user;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	.user {
		margin-right: 2rem;
		cursor: pointer;

		display: flex;
		align-items: center;

		span {
			margin-left: 1rem;
		}

		img {
			border-radius: 100%;
			width: 4rem;
		}
	}
	.my-classes {
		cursor: pointer;
		display: none;
		align-items: center;
		justify-content: center;
		img {
			border-radius: 100%;
			width: 4rem;
		}

		a {
			text-decoration: none;
			color: var(--color-text-in-primary);
		}
	}

	.sing-out {
		cursor: pointer;
		display: none;
		padding: 1rem;
		background-color: var(--color-primary-darker);
		border-radius: 1rem;
	}

	.hamburguerMenuWrapper {
		margin-left: auto;
		padding: 1rem;
		cursor: pointer;

		:hover {
			filter: opacity(100%);
		}
	}

	> div:hover {
		transition: 0.3s ease-in-out;
		filter: opacity(60%);
	}

	@media (min-width: 700px) {
		position: static;
		margin-bottom: 0;
		padding: 0;
		height: 100%;
		margin: 0 auto;
		width: 100%;
		padding: 0 9rem;

		.my-classes {
			display: flex;
		}

		.sing-out {
			display: flex;
			align-items: center;
			margin-left: auto;
		}

		.hamburguerMenuWrapper {
			display: none;
		}
	}
`

export const HamburguerMenu = styled.div<MenuHamburguerProps>`
	visibility: visible;
	position: relative;
	width: 2rem;
	height: 2px;
	border-radius: 1px;
	background-color: white;

	:after {
		width: 2rem;
		content: '';
		height: 2px;
		border-radius: 1px;
		background-color: white;
		position: absolute;
		top: -5px;
	}
	:before {
		width: 2rem;
		content: '';
		height: 2px;
		border-radius: 1px;
		background-color: white;
		position: absolute;
		bottom: -5px;
	}

	.lateralMenu {
		${(props) => {
			if (props.active) {
				return css`
					right: 0;
				`
			} else {
				return css`
					right: -400px;
				`
			}
		}}

		z-index: 5;
		position: fixed;
		height: 100vh;
		width: 40vw;
		top: 0;
		background-color: var(--color-primary-darker);
		padding: 2rem 1rem;
		border-left: 5px solid var(--color-primary-dark);
		transition: 300ms;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		a,
		p {
			display: flex;
			align-items: center;
			margin-top: 2rem;
			padding-left: 1rem;
			width: 100%;
			height: 4rem;
			text-decoration: none;
			color: white;
			transition: 300ms;

			:hover {
				border-radius: 2rem;
				background-color: var(--color-primary-dark);
				letter-spacing: 0.1rem;
			}
		}
		.closeMenu {
			width: 10rem;
			height: 10px;
			border-radius: 1px;
			z-index: 6;

			:after {
				width: 2rem;
				content: '';
				height: 2px;
				border-radius: 1px;
				transform: rotate(-135deg);
				background-color: white;
				position: absolute;
				top: 2rem;
				right: 2rem;
			}
			:before {
				width: 2rem;
				content: '';
				height: 2px;
				transform: rotate(135deg);
				border-radius: 1px;
				background-color: white;
				position: absolute;
				top: 2rem;
				right: 2rem;
			}
		}
	}

	@media (min-width: 700px) {
		visibility: hidden;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 2.5rem;

	img {
		height: 6rem;
	}

	h2 {
		font-weight: 500;
		font-size: 1.5rem;
		@media (min-width: 700px) {
			line-height: 4.6rem;
		}
		margin-top: 0.5rem;
	}

	@media (min-width: 700px) {
		padding-left: 10%;
		grid-area: logo;
		align-items: flex-start;
		text-align: left;
		margin: 0;

		h2 {
			text-align: initial;
			font-size: 150%;
		}

		img {
			width: 70%;
			height: 100%;
		}
	}
`

export const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	@media (min-width: 700px) {
		height: 100%;
		grid-area: buttons;
		justify-content: start;
		align-items: center;
		background-color: var(--color-background);

		a {
			font-size: 2.4rem;
		}
	}
`

export const Button = styled.div<ButtonProps>`
	border-radius: 0.8rem;
	width: 100%;
	max-width: 21rem;
	height: 100%;
	max-height: 14rem;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		width: 100%;
		height: 9.4rem;
		font-weight: 700;
		font-size: 2rem;

		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;

		text-decoration: none;
		color: var(--color-button-text);

		transition: background-color 0.2s;

		img {
			width: 4rem;
		}
	}

	@media (min-width: 700px) {
		width: 45%;
		max-width: 45%;

		a {
			height: 10.4rem;
			font-size: 2.4rem;

			flex-direction: row;
			justify-content: center;
		}
	}

	${(props) => {
		if (props.study) {
			return css`
				background: var(--color-primary-lighter);

				:hover {
					background: var(--color-primary-light);
				}
			`
		}
		if (props.give_classes) {
			return css`
				background: var(--color-secundary);

				:hover {
					background: var(--color-secundary-dark);
				}
			`
		}
	}}
	:first-child {
		margin-right: 1.6rem;
	}
`

export const Span = styled.span`
	width: 100%;
	display: flex;
	justify-content: space-between;

	.awelcome {
		display: none;
		font-size: 1.9rem;
		line-height: 1.5rem;
		color: var(--color-text-base);

		flex-direction: column;
	}

	.connections {
		font-size: 1.4rem;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;

		img {
			margin-left: 0.8rem;
		}
	}

	@media (min-width: 700px) {
		padding-left: 10%;
		grid-area: total;
		background-color: var(--color-background);
		height: 100%;

		.connections {
			width: 40%;
			height: 100%;
			justify-self: end;
			align-items: center;
			margin: 0 5% 0 0;
			min-width: 26rem;
		}
		.awelcome {
			width: 60%;
			height: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: center;
		}
	}
`
