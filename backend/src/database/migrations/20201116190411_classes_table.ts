import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('classes', (table: Knex.TableBuilder) => {
		table.increments('id').primary()

		table.string('biography').notNullable()
		table.string('subject').notNullable()
		table.string('cost').notNullable()
		table.integer('user_id').references('id').inTable('users')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('classes')
}
