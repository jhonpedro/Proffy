import Database from '../../database/connection'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)
export default async function testConnection() {
	//test five times the connection
	for (let i = 0; i < 5; i++) {
		try {
			await Database.raw('select 1+1 as result')
			await execPromise('npm run knex:migrate')

			return true
		} catch (error) {
			//await 3000ms between each try
			await new Promise((res) => setTimeout(res, 3000))
			continue
		}
	}

	return false
}
