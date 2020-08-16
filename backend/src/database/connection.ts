import knex from 'knex'

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env

const Database = knex({
  client: 'pg',
  connection: {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD
  },
  useNullAsDefault: true
})

export default Database