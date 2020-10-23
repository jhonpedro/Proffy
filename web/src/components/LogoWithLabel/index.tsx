import React from 'react'

import logoImg from '../../assets/images/logo.svg'

import { LogoArea } from './styles'

interface LogoSideProps {
	textComplement?: string
}

function LogoAside(
	{ textComplement }: LogoSideProps = {
		textComplement: 'Sua plataforma de estudos online',
	}
) {
	return (
		<LogoArea>
			<img src={logoImg} alt="Logo Proffy" />
			<p>{textComplement}</p>
		</LogoArea>
	)
}

export default LogoAside
