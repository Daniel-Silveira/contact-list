import { convertDate, emailValidator } from './utils'

describe('Services: utils', () => {
  it('should be have date converted to pt-br', () => {
    const date = new Date('05-19-2022')
    const result = convertDate(date)
    expect(result).toEqual('19/05/2022')
  })

  it('should check if the email is valid', () => {
    const email = 'test@gmail.com'
    const result = emailValidator(email)
    expect(result).toBeTruthy()
  })

  it('should check if the email is not valid', () => {
    const email = 'test@gmail'
    const result = emailValidator(email)
    expect(result).not.toBeTruthy()
  })
})
