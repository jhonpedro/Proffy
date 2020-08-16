import knex from 'knex'

const Database = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'proffy',
    user: 'joao',
    password: '12345'
  },
  useNullAsDefault: true
})

export default Database