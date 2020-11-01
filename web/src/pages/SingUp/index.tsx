import React from 'react'

import LogoWithLabel from '../../components/LogoWithLabel'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { SingUpContainer, SingUpBox } from './styles'

function SingUp() {
	return (
		<SingUpContainer>
			<LogoWithLabel />
			<SingUpBox>
				<strong>Cadastro</strong>
				<p>Preencha os dados abaixo para começar</p>
				<form>
					<Input label="Nome" name="name" />
					<Input label="Sobrenome" name="last_name" />
					<Input label="E-mail" name="email" type="email" />
					<Input label="Senha" name="password" type="password" />
					<Button type="submit">Concluir cadastro</Button>
				</form>
			</SingUpBox>
		</SingUpContainer>
	)
}

export default SingUp
