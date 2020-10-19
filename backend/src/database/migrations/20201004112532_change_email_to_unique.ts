import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (table: Knex.AlterTableBuilder) => {
    table.string('email').unique().notNullable().alter()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (table: Knex.AlterTableBuilder) => {
    table.string('email').notNullable().alter()
  })
}

