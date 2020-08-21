import React from 'react'
import GlobalStyle from './assets/styles/global'
// import './assets/styles/global.css'

import Routes from './routes'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  )
}

export default App