import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from '../../services/axios'

import backIcon from '../../assets/images/icons/back.svg'
import Input from '../../components/Input'
import LogoWithLabel from '../../components/LogoWithLabel'
import Button from '../../components/Button'

import { ChangePasswordContainer, ChangePasswordBox } from './styles'
import ActionSuccess from '../../components/ActionSuccess'

interface Token {
	token: string
}

function ChangePassword() {
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [isChangePasswordSuccess, setIsChangePasswordSuccess] = useState(false)
	const { token } = useParams<Token>()
	const { push } = useHistory()

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (password !== passwordConfirm) {
			toast.error('Senhas diferentes!')
			return
		}

		const tokenAndNewPassword = {
			token,
			newPassword: password,
		}

		try {
			const schema = Yup.object().shape({
				token: Yup.string().required(),
				newPassword: Yup.string()
					.min(6, 'Senha com no mínimo 6 caracteres')
					.required(),
			})

			await schema.validate(tokenAndNewPassword, { abortEarly: false })

			await axios.post('/forgot-password-change', tokenAndNewPassword)

			setIsChangePasswordSuccess(true)
		} catch (error) {
			toast.error(
				'Ocorreu um erro, tente solicitar outra redefinição de senha!'
			)
		}
	}

	function handleGoHome() {
		push('/')
	}

	function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value)
	}

	function handleChangePasswordConfirm(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setPasswordConfirm(event.target.value)
	}

	if (isChangePasswordSuccess) {
		return (
			<ActionSuccess
				textTitle="Eba! Trocamos a sua senha!"
				textComplement="Agora é só fazer o login clicando no botão abaixo"
				textButton="Fazer login"
				linkButton="/"
			/>
		)
	}

	return (
		<ChangePasswordContainer>
			<LogoWithLabel />
			<ChangePasswordBox>
				<img src={backIcon} alt="Voltar para o menu" onClick={handleGoHome} />
				<strong>Digite a sua nova senha</strong>
				<form onSubmit={handleSubmit}>
					<Input
						label="Senha"
						name="senha"
						type="password"
						value={password}
						onChange={handleChangePassword}
					/>
					<Input
						label="Confirmação da senha"
						name="senhaConfirmacao"
						type="password"
						value={passwordConfirm}
						onChange={handleChangePasswordConfirm}
					/>
					<Button type="submit">Mudar a senha</Button>
				</form>
			</ChangePasswordBox>
		</ChangePasswordContainer>
	)
}

export default ChangePassword
