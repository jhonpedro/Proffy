import styled from 'styled-components'
import backgroundUser from '../../assets/images/background-user.svg'

export const PageUser = styled.div`
	width: 100%;
	height: 100%;
	background: var(--color-background);
	position: unset;

	@media (min-width: 700px) {
		header {
			padding-bottom: 8rem;
		}
	}
	@media (min-height: 860px) {
		position: unset;
	}
`

export const UserIndividual = styled.div`
	text-align: center;
	background-image: url(${backgroundUser});
	background-position: center;
	background-repeat: no-repeat;
	background-blend-mode: color-burn;
	width: 100%;

	.photo {
		margin: 0 auto;
		max-width: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		> img {
			border-radius: 50%;
		}

		> img {
			height: 180px;
			width: 180px;
			object-fit: cover;
		}

		:first-child {
			color: white;
		}
	}

	strong {
		font-size: 2.5rem;
	}

	label {
		cursor: pointer;
	}

	input {
		display: none;
	}

	.user-cam {
		position: absolute;
		bottom: 0;
		right: 2rem;
	}

	@media (min-width: 700px) {
		margin-top: 2rem;
	}
`

export const UserContainer = styled.div`
	width: 100%;
	margin-top: -1rem;
	border-radius: 0.8rem;
	padding: 2rem 0.5rem;
	background: url(${backgroundUser});
	background-repeat: no-repeat;
	background-position: center;
	object-fit: contain;

	background: var(--color-box-base);

	> form {
		padding: 0 2.5rem;
	}

	@media (min-width: 700px) {
		max-width: 74rem;
		margin: 0 auto;
		margin-top: -10rem;

		padding: 5rem;
		> form {
			padding: 0 6.3rem;
		}
	}
`

export const InputsGrid = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-template-areas:
		'nameInput nameInput'
		'last_nameInput last_nameInput'
		'emailInput emailInput'
		'whatsappInput whatsappInput'
		'submitButton submitButton'
		'changePassword changePassword';
	grid-row-gap: 2rem;

	.nameInput {
		grid-area: nameInput;
	}
	.last_nameInput {
		grid-area: last_nameInput;
	}
	.emailInput {
		grid-area: emailInput;
		cursor: not-allowed;
	}
	.emailInput input {
		cursor: not-allowed;
	}
	.whatsappInput {
		grid-area: whatsappInput;
		text-align: center;
	}
	.whatsappInput input {
		text-align: center;
	}
	[type='submit'] {
		grid-area: submitButton;
	}
	.changePassword {
		grid-area: changePassword;
	}

	@media (min-width: 700px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-template-areas:
			'nameInput nameInput nameInput last_nameInput  last_nameInput last_nameInput'
			'emailInput emailInput emailInput emailInput whatsappInput whatsappInput'
			'changePassword changePassword changePassword submitButton submitButton submitButton';
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
	}
`
