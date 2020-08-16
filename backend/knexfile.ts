import path from 'path'
require('dotenv/config')

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env

module.exports = {
  client: 'pg',
  connection: {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}