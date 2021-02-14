import axios from 'axios'

export default axios.create({
	//If you've ran the docker-compose this is the api
	baseURL: 'http://localhost:11111',
})
