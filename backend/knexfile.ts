import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'proffy',
    user: 'joao',
    password: '12345'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}