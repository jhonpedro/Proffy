import React from 'react'
import { useHistory } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import { PageHeaderElement, TopBar, HeaderContent } from './styles'

interface PageHeaderProps {
	middleTitleText: string
	title?: string
	description?: string
	children?: React.ReactChild
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	description,
	middleTitleText,
	children: Component,
}) => {
	const { goBack } = useHistory()

	function handleGoBack() {
		goBack()
		return
	}

	return (
		<PageHeaderElement>
			<TopBar>
				<span onClick={handleGoBack}>
					<img src={backIcon} alt='Voltar' />
				</span>
				<span>{middleTitleText}</span>
				<img src={logoImg} alt='Logo Proffy' />
			</TopBar>
			<HeaderContent>
				{title ? <strong>{title}</strong> : null}
				{description && <p>{description}</p>}
				{Component}
			</HeaderContent>
		</PageHeaderElement>
	)
}

export default PageHeader
