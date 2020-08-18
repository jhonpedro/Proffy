import validator from 'validator'

export default function emailValidator(email: string) {
  const isValid = validator.isEmail(email)

  return isValid
}