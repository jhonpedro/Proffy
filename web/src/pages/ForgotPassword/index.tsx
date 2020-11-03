import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import backIcon from '../../assets/images/icons/back.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import LogoWithLabel from '../../components/LogoWithLabel'

import { ForgotPasswordContainer, ForgotPasswordBox } from './styles'

function ForgotPassword() {
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)
	const { goBack } = useHistory()

	async function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
		try {
			setEmail(event.target.value)

			const schema = Yup.object().shape({
				email: Yup.string().email().required(),
			})

			await schema.validate({
				email,
			})

			setIsEmailValid(true)
		} catch (e) {
			setIsEmailValid(false)
		}
	}

	function handleGoBack() {
		goBack()
	}

	return (
		<ForgotPasswordContainer>
			<LogoWithLabel />
			<ForgotPasswordBox>
				<img src={backIcon} alt="Voltar" onClick={handleGoBack} />
				<strong>Eita, esqueceu sua senha?</strong>
				<p>Não esquenta, vamos dar um geito nisso.</p>
				<form className={isEmailValid ? 'active' : ''}>
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
