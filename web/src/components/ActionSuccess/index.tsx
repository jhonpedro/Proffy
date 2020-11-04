import React from 'react'
import { useHistory } from 'react-router-dom'

import successIcon from '../../assets/images/icons/success-check-icon.svg'
import Button from '../Button'

import { ActionSuccessContainer, Content } from './styles'

interface ActionSuccessProps {
	textTitle: string
	textComplement: string
	textButton: string
	linkButton: string
}

const ActionSuccess: React.FC<ActionSuccessProps> = ({
	textTitle,
	textComplement,
	textButton,
	linkButton,
}) => {
	const { push } = useHistory()

	function handleRedirect() {
		push(linkButton)
		return
	}

	return (
		<ActionSuccessContainer>
			<Content>
				<img src={successIcon} alt="Ícone sucesso" />
				<strong>{textTitle}</strong>
				<p>{textComplement}</p>

				<Button onClick={handleRedirect}>{textButton}</Button>
			</Content>
		</ActionSuccessContainer>
	)
}

export default ActionSuccess
