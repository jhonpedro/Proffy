import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import backIcon from '../../assets/images/icons/back.svg'
import ActionSuccess from '../../components/ActionSuccess'
import Button from '../../components/Button'
import Input from '../../components/Input'
import LogoWithLabel from '../../components/LogoWithLabel'
import axios from '../../services/axios'

import { ForgotPasswordContainer, ForgotPasswordBox } from './styles'

function ForgotPassword() {
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)
	const [isEmailSended, setIsEmailSended] = useState(false)
	const { goBack } = useHistory()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (!isEmailValid) return

		axios.post('/forgot-password-email', { email })

		setIsEmailSended(true)
	}

	async function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		try {
			setEmail(event.target.value)

			const schema = Yup.object().shape({
				email: Yup.string().email().required(),
			})

			await schema.validate({
				email: event.target.value,
			})

			setIsEmailValid(true)
		} catch (e) {
			console.log(e)
			setIsEmailValid(false)
		}
	}

	function handleGoBack() {
		goBack()
	}

	if (isEmailSended) {
		return (
			<ActionSuccess
				textTitle="Redefinição enviada!"
				textComplement="Boa, agora é só checar o e-mail que foi enviado para você
    redefinir sua senha e aproveitar os estudos."
				textButton="Voltar ao login"
				linkButton="/"
			/>
		)
	}

	return (
		<ForgotPasswordContainer>
			<LogoWithLabel />
			<ForgotPasswordBox>
				<img src={backIcon} alt="Voltar" onClick={handleGoBack} />
				<strong>Eita, esqueceu sua senha?</strong>
				<p>Não esquenta, vamos dar um geito nisso.</p>
				<form className={isEmailValid ? 'active' : ''} onSubmit={handleSubmit}>
					<Input
						label="E-mail"
						name="email"
						type="email"
						onChange={handleEmailChange}
					/>
					<Button type="submit">Enviar</Button>
				</form>
			</ForgotPasswordBox>
		</ForgotPasswordContainer>
	)
}

export default ForgotPassword
