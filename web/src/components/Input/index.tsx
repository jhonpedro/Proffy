import React, { InputHTMLAttributes, useState, FocusEvent } from 'react'

import { InputBlock, InputElement, Label } from './styles'

// import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
	type?: string
}

const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
	const [labelAbove, setLabelAbove] = useState(false)

	function handleFocus(event: FocusEvent<HTMLInputElement>) {
		if (event.target.value === '') {
			setLabelAbove(false)
			return
		}
		setLabelAbove(true)
	}

	return (
		<InputBlock>
			<Label isUp={labelAbove}>{label}</Label>
			<InputElement
				onBlur={handleFocus}
				type={type ? type : 'text'}
				{...rest}
				id={name}
			/>
		</InputBlock>
	)
}

export default Input
