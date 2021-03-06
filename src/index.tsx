import React from 'react'
import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { rootStore } from './stores'

function WrappedApp(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider {...rootStore}>
        <ToastContainer theme="light" />
        <App />
      </Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
