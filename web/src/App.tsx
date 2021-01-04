import React from 'react'
import GlobalStyle from './assets/styles/global'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.min.css'

// import './assets/styles/global.css'

import Routes from './routes'
import AppProvider from './hooks'

function App() {
	return (
		<BrowserRouter>
			<AppProvider>
				<GlobalStyle />
				<Routes />
				<ToastContainer />
			</AppProvider>
		</BrowserRouter>
	)
}

export default App
