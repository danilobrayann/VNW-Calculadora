import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home'
import GlobalStyle from './Styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home/>
  </React.StrictMode>,
)
