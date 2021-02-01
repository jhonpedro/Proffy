import React, { InputHTMLAttributes } from 'react'

import { SimpleInputContainer } from './styles'

interface SimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
}

const SimpleInput: React.FC<SimpleInputProps> = ({ label, name, ...rest }) => {
	return (
		<SimpleInputContainer>
			<label htmlFor={name}>{label}</label>
			<input type='text' id={name} {...rest} />
		</SimpleInputContainer>
	)
}

export default SimpleInput
