import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'proffy',
    user: 'joao',
    password: '12345'
  },
  useNullAsDefault: true
})

export default db