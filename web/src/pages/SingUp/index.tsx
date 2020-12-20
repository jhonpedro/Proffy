import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import backIcon from '../../assets/images/icons/back.svg'
import LogoWithLabel from '../../components/LogoWithLabel'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { SingUpContainer, SingUpBox } from './styles'
import axios from '../../services/axios'
import ActionSuccess from '../../components/ActionSuccess'

function SingUp() {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
	const { goBack } = useHistory()

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const userFormData = {
			name,
			last_name: lastName,
			email,
			password,
		}

		const schema = Yup.object().shape({
			name: Yup.string().required('Nome obrigatório'),
			last_name: Yup.string().required('Sobrenome obrigatório'),
			email: Yup.string().required('Email obrigatório'),
			password: Yup.string()
				.min(6, 'Senha com no mínimo 6 caracteres')
				.required('Senha obrigatória'),
		})

		try {
			await schema.validate(userFormData, { abortEarly: false })

			await axios.post('/user', userFormData)

			successRegister()
		} catch (error) {
			if (error?.name === 'ValidationError') {
				error?.errors.map((err: String) => toast.error(err))
			}
		}
	}

	function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value)
	}
	function handleChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
		setLastName(event.target.value)
	}
	function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value)
	}
	function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value)
	}

	function successRegister() {
		setIsRegisterSuccess(true)
	}

	function handleGoBack() {
		goBack()
	}

	if (isRegisterSuccess) {
		return (
			<ActionSuccess
				textTitle="Cadastro concluído"
				textComplement={`Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.`}
				textButton="Fazer login"
				linkButton="/"
			/>
		)
	}

	return (
		<SingUpContainer>
			<LogoWithLabel />
			<SingUpBox>
				<img src={backIcon} alt="Voltar" onClick={handleGoBack} />
				<strong>Cadastro</strong>
				<p>Preencha os dados abaixo para começar</p>
				<form onSubmit={handleSubmit}>
					<Input
						label="Nome"
						name="name"
						value={name}
						onChange={handleChangeName}
					/>
					<Input
						label="Sobrenome"
						name="last_name"
						value={lastName}
						onChange={handleChangeLastName}
					/>
					<Input
						label="E-mail"
						name="email"
						type="email"
						value={email}
						onChange={handleChangeEmail}
					/>
					<Input
						label="Senha"
						name="password"
						type="password"
						value={password}
						onChange={handleChangePassword}
					/>
					<Button type="submit">Concluir cadastro</Button>
				</form>
			</SingUpBox>
		</SingUpContainer>
	)
}

export default SingUp
