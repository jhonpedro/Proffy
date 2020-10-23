import React from 'react'

import logoImg from '../../assets/images/logo.svg'

import { LogoArea } from './styles'

interface LogoSideProps {
	textComplement?: string
}

const LogoAside: React.FC<LogoSideProps> = ({ textComplement }) => {
	return (
		<LogoArea>
			<img src={logoImg} alt="Logo Proffy" />
			<p>
				{textComplement ? textComplement : 'Sua plataforma de estudos online'}
			</p>
		</LogoArea>
	)
}

export default LogoAside
