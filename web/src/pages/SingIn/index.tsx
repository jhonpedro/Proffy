import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from '../../services/axios'

import Input from '../../components/Input'
import LogoWithLabel from '../../components/LogoWithLabel'
import Button from '../../components/Button'

import { SingInContainer, SingInBox } from './styles'

interface Token {
	data: [string]
}

function SingIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [remember, setRemember] = useState(false)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const schema = Yup.object().shape({
			email: Yup.string().email('Email inválido').required('Email obrigatório'),
			password: Yup.string()
				// .min(6, 'Senha com no mínimo 6 caracteres')
				.required('Senha obrigatória'),
		})

		try {
			await schema.validate(
				{
					email,
					password,
				},
				{ abortEarly: false }
			)

			const response = await axios.post('/user/session', { email, password })

			const { token } = response?.data as { token: string }

			axios.defaults.headers.Authorization = `Bearer ${token}`
			if (remember) {
				localStorage.setItem('user', JSON.stringify({ token }))
			}
		} catch (error) {
			if (error.name === 'ValidationError') {
				error?.errors.map((err: Yup.ValidationError) => toast.error(err))
			}
		}
	}

	function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value)
	}

	function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value)
	}

	function handleChangeRemember(event: React.ChangeEvent<HTMLInputElement>) {
		setRemember(!remember)
	}

	return (
		<SingInContainer>
			<LogoWithLabel />
			<SingInBox>
				<strong>Fazer login</strong>
				<form onSubmit={handleSubmit}>
					<Input
						label="E-mail"
						name="email"
						type="text"
						value={email}
						onChange={handleChangeEmail}
					/>
					<Input
						label="Senha"
						name="senha"
						type="password"
						value={password}
						onChange={handleChangePassword}
					/>
					<div className="passwordAndRemember">
						<label>
							<input
								type="checkbox"
								onChange={handleChangeRemember}
								checked={remember}
							/>
							Lembrar-me
						</label>
						<Link to="/forgot-password">Esqueci minha senha</Link>
					</div>
					<Button type="submit">Entrar</Button>
				</form>
				<footer>
					<p>
						Não tem conta? <br />
						<Link to="/sing-up">Cadastre-se</Link>
					</p>
					<small>É de graça ❤</small>
				</footer>
			</SingInBox>
		</SingInContainer>
	)
}

export default SingIn
