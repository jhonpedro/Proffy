import styled from 'styled-components'

export const TeacherItemContainer = styled.article`
	background: var(--color-box-base);
	border: 1px solid var(--color-line-in-white);
	border-radius: 0.8rem;
	margin-top: 2.4rem;
	overflow: hidden;

	> p {
		padding: 0 2rem;
		font-size: 1.6rem;
		line-height: 2.8rem;
	}

	@media (min-width: 700px) {
		padding: 0 3.2rem;

		> p {
			padding: 0 3.2rem;
		}
	}
`

export const Header = styled.header`
	padding: 3.2rem 2rem;
	display: flex;
	align-items: center;

	img {
		width: 8rem;
		height: 8rem;
		border-radius: 50%;
	}

	div {
		margin-left: 2.4rem;

		strong {
			font-weight: 700;
			font-size: 2.4rem;
			display: block;
			color: var(--color-text-title);
		}

		span {
			font-size: 1.6rem;
			display: block;
			margin-top: 0.4rem;
		}
	}

	@media (min-width: 700px) {
		padding: 3.2rem;
	}
`

export const Paragraph = styled.p`
	padding: 0 2rem;
	font-size: 1.6rem;
	line-height: 2.8rem;
`

export const Footer = styled.footer`
	padding: 3.2rem;
	background: var(--color-box-footer);
	border-top: 1px solid var(--color-line-in-white);
	margin-top: 3.2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	p strong {
		color: var(--color-primary);
		font-size: 1.6rem;
		display: block;
	}

	a {
		width: 20rem;
		height: 5.6rem;
		background: var(--color-secundary);
		color: var(--color-button-text);
		border: none;
		border-radius: 0.8rem;
		cursor: pointer;
		font-weight: 700;
		font-size: 1.4rem;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		text-decoration: none;
		transition: background 0.2s;

		:hover {
			background: var(--color-secundary-dark);
		}
	}

	@media (min-width: 700px) {
		padding: 3.2rem;

		p strong {
			display: initial;
			margin-left: 1.6rem;
		}

		a {
			width: 24.5rem;
			font-size: 1.6rem;
			justify-content: center;
		}

		a img {
			margin-right: 1.6rem;
		}
	}
`
