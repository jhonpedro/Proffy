export default class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParam'
    this.message = 'You forgot to pass a parameter or the param is undefined'
  }
}