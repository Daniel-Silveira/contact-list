export const convertDate = (time?: Date) => {
  if (!time) return 'Date is undefined'
  const date = new Date(time)
  return date.toLocaleString('pt-br', { dateStyle: 'short' })
}

export const emailValidator = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}
