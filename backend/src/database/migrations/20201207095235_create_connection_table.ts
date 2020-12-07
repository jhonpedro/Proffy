import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(
		'connections',
		(table: Knex.CreateTableBuilder) => {
			table.increments('id').primary()

			table
				.integer('user_id')
				.notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')

			table.string('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
		}
	)
}

export async function down(knex: Knex): Promise<void> {}
