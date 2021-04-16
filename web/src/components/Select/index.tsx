import React, { SelectHTMLAttributes } from 'react'

import { SelectBlock, SelectElement } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string
	name: string
	options: Array<{
		value: string
		label: string
	}>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
	return (
		<SelectBlock>
			<label htmlFor={name}>{label}</label>
			<SelectElement {...rest} id={name}>
				<option value='' disabled defaultChecked hidden>
					Selecione
				</option>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					)
				})}
			</SelectElement>
		</SelectBlock>
	)
}

export default Select
