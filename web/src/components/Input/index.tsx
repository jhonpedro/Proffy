import React, { InputHTMLAttributes, useState, FocusEvent } from 'react'

import { InputBlock, InputElement, Label } from './styles'

// import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
	type?: string
}

const Input: React.FC<InputProps> = ({
	label,
	name,
	type,
	value,
	className,
	...rest
}) => {
	const [labelAbove, setLabelAbove] = useState(() => {
		if (value) {
			return true
		}
		return false
	})

	function handleFocus(event: FocusEvent<HTMLInputElement>) {
		if (event.target.value === '') {
			setLabelAbove(false)
			return
		}
		setLabelAbove(true)
	}

	return (
		<InputBlock className={className}>
			<Label isUp={labelAbove} htmlFor={`${name}`}>
				{label}
			</Label>
			<InputElement
				onBlur={handleFocus}
				type={type ? type : 'text'}
				{...rest}
				value={value}
				id={name}
			/>
		</InputBlock>
	)
}

export default Input
