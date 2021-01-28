import styled, { css } from 'styled-components'

interface ScheduleItemProps {
	hasTime: boolean
}

export const TeacherItemContainer = styled.article`
	background: var(--color-box-base);
	border: 1px solid var(--color-line-in-white);
	border-radius: 0.8rem;
	overflow: hidden;

	> p {
		padding: 0 2rem;
		font-size: 1.6rem;
		line-height: 2.8rem;
	}

	@media (min-width: 700px) {
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

export const SchedulesContainer = styled.div`
	padding: 1rem 2rem 0;
	margin-top: 1rem;
	border-top: 1px solid var(--color-line-in-white);
	width: 100%;

	.schedule-strong-box {
		display: flex;
		justify-content: space-between;
		font-size: 1.2rem;
		padding: 0 2rem;

		::before {
			content: 'Dia';
			display: inline-block;
		}
		::after {
			content: 'Horário';
			display: inline-block;
		}
	}

	@media (min-width: 700px) {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;

		.schedule-strong-box {
			display: none;
		}
	}
`

export const ScheduleItem = styled.div<ScheduleItemProps>`
	display: flex;
	justify-content: space-between;
	font-size: 1.6rem;
	padding: 1rem;
	background-color: var(--color-box-footer);
	border: 2px solid var(--color-line-in-white);
	border-radius: 2rem;
	margin-bottom: 1rem;

	.week_day {
		width: 7.5rem;
	}

	.time {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 6.5rem;
		text-align: center;
	}

	> img {
		display: initial;
	}

	@media (min-width: 700px) {
		flex-direction: column;
		font-size: 1.4rem;

		.week_day {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: auto;

			::before {
				content: 'Dia';
				font-size: 1rem;
				display: inline-block;
			}
		}
		.time {
			flex-direction: column;
			width: auto;

			::before {
				font-size: 1rem;

				content: 'Horário';
				display: inline-block;
			}
		}

		> img {
			display: none;
		}
	}

	${(props) => {
		if (!props.hasTime) {
			return css`
				filter: opacity(60%);
				.time {
					font-size: 1rem;

					@media (min-width: 700px) {
						font-size: 1.1rem;
					}
				}
			`
		}

		return
	}}
`

export const Footer = styled.footer`
	padding: 3.2rem;
	background: var(--color-box-footer);
	border-top: 1px solid var(--color-line-in-white);
	margin-top: 1.5rem;

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
