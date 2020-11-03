import React from 'react'
import GlobalStyle from './assets/styles/global'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

// import './assets/styles/global.css'

import Routes from './routes'

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Routes />
			<ToastContainer />
		</React.Fragment>
	)
}

export default App
