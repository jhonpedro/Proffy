import React from 'react'

import { ButtonComponent } from './styles'

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
	return (
		<ButtonComponent type={type ? type : 'button'}>{children}</ButtonComponent>
	)
}

export default Button
