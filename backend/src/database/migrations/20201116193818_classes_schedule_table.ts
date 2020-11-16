import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('classes_schedule', (table: Knex.TableBuilder) => {
		table.increments('id').primary()

		table.integer('week_day').notNullable()
		table.integer('start').notNullable()
		table.integer('end').notNullable()
		table.integer('class_id').references('id').inTable('classes')
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('classes_schedule')
}
