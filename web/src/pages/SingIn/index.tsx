import React from 'react'
import Input from '../../components/Input'

import logoImg from '../../assets/images/logo.svg'
import { SingInContainer, LogoArea, SingInBox } from './styles'

function SingIn() {
	return (
		<SingInContainer>
			<LogoArea>
				<img src={logoImg} alt="Logo Proffy" />
				<p>Sua plataforma de estudos online</p>
			</LogoArea>
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
					<button type="submit">Entrar</button>
				</form>
				<footer>
					<p>
						Não tem conta? <br />
						<a href="">Cadastre-se</a>
					</p>
					<small>É de graça ❤</small>
				</footer>
			</SingInBox>
		</SingInContainer>
	)
}

export default SingIn
