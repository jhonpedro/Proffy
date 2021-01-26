import styled from 'styled-components'

export const PageHeaderElement = styled.header`
	display: flex;
	flex-direction: column;
	background-color: var(--color-primary);

	@media (min-width: 700px) {
		min-height: 34rem;
	}
`

export const TopBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--color-text-in-primary);
	padding: 1.6rem;
	background-color: var(--color-primary-dark);
	border-bottom: 2px solid var(--color-primary-darker);

	span {
		height: 3.2rem;
		transition: opacity 0.2s;
		cursor: pointer;
	}

	span:hover {
		opacity: 0.6;
	}

	> img {
		height: 1.6rem;
	}

	@media (min-width: 700px) {
		padding: 1.6rem 10%;
	}
`

export const HeaderContent = styled.div`
	width: 90%;
	margin: 0 auto;
	position: relative;
	margin: 3.2rem auto;

	p {
		font-size: 1.6rem;
		line-height: 2.6rem;
		color: var(--color-text-in-primary);
		margin-top: 2.4rem;
	}

	strong {
		font-weight: 700;
		font-size: 3.6rem;
		line-height: 4.2rem;
		color: var(--color-title-in-primary);
	}

	@media (min-width: 700px) {
		flex: 1;
		margin: 0 auto;
		padding-bottom: 48px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		strong,
		p {
			max-width: 100%;
		}
	}
`
