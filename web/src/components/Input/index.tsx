import React, { InputHTMLAttributes } from 'react'

import {
  InputBlock,
  InputElement
} from './styles'

// import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <InputElement type="text" {...rest} id={name} />
    </InputBlock>
  )
}

export default Input