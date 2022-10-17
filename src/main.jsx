import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './Container'
import GlobalStyle from '../styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <>
            <GlobalStyle/>
            <Container/>
          </>

  </React.StrictMode>
)
