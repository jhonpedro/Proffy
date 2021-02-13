import App from './app'

import testDatabaseConnection from './utils/helpers/testDatabaseConnection'
;(async () => {
	if (await !testDatabaseConnection()) {
		throw new Error('Database is not connected')
	}
})()

App.listen(3030, () =>
	console.log('Server is running on http://localhost:3030')
)
