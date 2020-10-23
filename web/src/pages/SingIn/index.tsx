import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import LogoWithLabel from '../../components/LogoWithLabel'
import Button from '../../components/Button'

import { SingInContainer, SingInBox } from './styles'

function SingIn() {
	return (
		<SingInContainer>
			<LogoWithLabel />
			<SingInBox>
				<strong>Fazer login</strong>
				<form onSubmit={() => {}}>
					<Input label="E-mail" name="email" type="text" />
					<Input label="Senha" name="senha" type="password" />
					<div className="passwordAndRemember">
						<label>
							<input type="checkbox" />
							Lembrar-me
						</label>
						<a href="">Esqueci minha senha</a>
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
