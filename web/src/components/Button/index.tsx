import React from 'react'

import { ButtonComponent } from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
	return (
		<ButtonComponent type={type ? type : 'button'} {...rest}>
			{children}
		</ButtonComponent>
	)
}

export default Button
