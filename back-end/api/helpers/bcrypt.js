const bcrypt = require('bcrypt')
const saltRounds = 10

export const hash = async password => {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (error, salt) => {
      bcrypt.hash(password, salt, (error, result) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
    })
  })

  return hashedPassword
}

export const compare = async (inputPassword, storedPassword) => {
  const match = await new Promise((resolve, reject) => {
    bcrypt.compare(inputPassword, storedPassword, (error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result)
    })
  })

  return match
}
