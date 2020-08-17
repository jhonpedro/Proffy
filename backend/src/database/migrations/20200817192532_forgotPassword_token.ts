import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('forgotPassword_token', table => {
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')

    table.string('token')
      .notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('forgotPassword_token')
}

