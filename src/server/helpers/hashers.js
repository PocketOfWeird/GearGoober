import bcrypt from 'bcrypt'


const SALT = 8

export const hash = (password) => {
  return bcrypt.hashSync(password, SALT)
}

export const isSame = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

export const randomId = () => {
  return Math.random().toString(36).substr(2,12)
}
