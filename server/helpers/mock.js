const { hash, randomId } = require('./hashers')


const tennantId = randomId()
const userId = randomId()
const userPassword = hash('boogerface')

const mockSnapshop = {
  tennants: { [tennantId]: { name: 'Demo University' }},
  users: {
    [userId]: {
      tennant: tennantId, email: 'bob@demo.edu', password: userPassword,
      permissions: { admin: true, manager: true, labworker: true } 
    }
  },
  lookup: { users: { 'bob@demo.edu': userId } }
}

module.exports = mockSnapshop
