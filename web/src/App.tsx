import React from 'react'
import GlobalStyle from './assets/styles/global'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

// import './assets/styles/global.css'

import Routes from './routes'
import AppProvider from './hooks'

function App() {
	return (
		<AppProvider>
			<GlobalStyle />
			<Routes />
			<ToastContainer />
		</AppProvider>
	)
}

export default App
