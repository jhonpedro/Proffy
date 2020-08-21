import React, { TextareaHTMLAttributes } from 'react'

// import './styles.css'

import {
  TextAreaContainer,
  TextArea
} from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  name: string
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <TextArea {...rest} id={name} />
    </TextAreaContainer>
  )
}

export default Textarea